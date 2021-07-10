import store from 'store'
import * as actions from './actions'

const STORED_SETTINGS = (storedSettings: object) => {
  const settings = {}
  Object.keys(storedSettings).forEach((key) => {
    const item = store.get(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

export const initialState: object = {
  ...STORED_SETTINGS({
    authProvider: 'jwt',
    logo: 'Order App',
    version: 'fluent',
    theme: 'default',
    locale: 'en-US',
    isSidebarOpen: false,
    isSupportChatOpen: false,
    isMobileView: false,
    isMobileMenuOpen: false,
    isMenuCollapsed: false,
    isPreselectedOpen: false,
    preselectedVariant: 'default',
    menuLayoutType: 'left',
    routerAnimation: 'slide-fadein-up',
    menuColor: 'gray',
    authPagesColor: 'gray',
    isAuthTopbar: true,
    primaryColor: '#4b7cf3',
    leftMenuWidth: 256,
    isMenuUnfixed: false,
    isMenuShadow: false,
    isTopbarFixed: false,
    isTopbarSeparated: false,
    isGrayTopbar: false,
    isContentMaxWidth: false,
    isAppMaxWidth: false,
    isGrayBackground: false,
    isCardShadow: true,
    isSquaredBorders: false,
    isBorderless: false,
    layoutMenu: 'classic',
    layoutTopbar: 'v1',
    layoutBreadcrumbs: 'v1',
    layoutFooter: 'v1',
    flyoutMenuType: 'flyout',
    flyoutMenuColor: 'blue',

    // VB:REPLACE-END:SETTINGS
  }),
}

export function reducer(state = initialState, action: actions.Actions): object {
  switch (action.type) {
    case actions.SET_STATE:
      const key = Object.keys(action.payload)[0]
      store.set(`app.settings.${key}`, action.payload[key])
      return { ...state, ...action.payload }
    case actions.CHANGE_SETTING_BULK:
      const settings = {}
      Object.keys(action.payload).forEach((key) => {
        store.set(`app.settings.${key}`, action.payload[key])
        settings[key] = action.payload[key]
      })
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const getSettings = (state: any) => state
