const lodash = require('lodash')
const { REPLACE_NEXT_LINE, REPLACE_BETWEEN } = require('../utils/io')

const routerFile = 'src/app/app-routing.module.ts'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const routeTpl = (route) => {
  const name = `${capitalizeFirstLetter(lodash.camelCase(route.url))}Component`
  return `{
    path: '${route.url.substring(1)}',
    data: { title: '${route.title}', },
    component: ${name},
  },\n`
}
const importTpl = (route) => {
  const name = `${capitalizeFirstLetter(lodash.camelCase(route.url))}Component`
  const shortName = route.url.split('/').reverse()[0]
  return `import { ${name} } from './pages${route.url}/${shortName}.component'\n`
}
const declarationTpl = (route) => {
  const name = `${capitalizeFirstLetter(lodash.camelCase(route.url))}Component`
  return `${name},\n`
}

module.exports = (config) => {
  // prepare data
  let redirectTo
  const _routes = (data) => {
    let temp = ``
    data.forEach((item) => {
      if (item.category || item.url === '/auth') {
        return
      }
      if (!redirectTo) {
        redirectTo = process.env.REDIRECT_URL || item.url
      }
      temp = temp + routeTpl(item)
      if (item.children) {
        temp = temp + _routes(item.children)
      }
    })
    return temp
  }
  const routes = _routes(config)

  const _imports = (data) => {
    let temp = ``
    data.forEach((item) => {
      if (item.category || item.url === '/auth') {
        return
      }
      temp = temp + importTpl(item)
      if (item.children) {
        temp = temp + _imports(item.children)
      }
    })
    return temp
  }
  const imports = _imports(config)

  const _declarations = (data) => {
    let temp = ``
    data.forEach((item) => {
      if (item.category || item.url === '/auth') {
        return
      }
      temp = temp + declarationTpl(item)
      if (item.children) {
        temp = temp + _declarations(item.children)
      }
    })
    return temp
  }
  const declarations = _declarations(config)

  // replace redirectTo
  REPLACE_NEXT_LINE(
    routerFile,
    `VB:REPLACE-NEXT-LINE:ROUTER-REDIRECT`,
    `redirectTo: '${redirectTo.substring(1)}',`,
    'typescript',
  )

  // replace imports
  REPLACE_BETWEEN(
    routerFile,
    `VB:REPLACE-START:ROUTER-IMPORTS`,
    `VB:REPLACE-END:ROUTER-IMPORTS`,
    imports,
    'typescript',
  )

  // replace routes
  REPLACE_BETWEEN(
    routerFile,
    `VB:REPLACE-START:ROUTER-CONFIG`,
    `VB:REPLACE-END:ROUTER-CONFIG`,
    routes,
    'typescript',
  )

  // replace declarations
  REPLACE_BETWEEN(
    routerFile,
    `VB:REPLACE-START:ROUTER-DECLARATIONS`,
    `VB:REPLACE-END:ROUTER-DECLARATIONS`,
    declarations,
    'typescript',
  )
}
