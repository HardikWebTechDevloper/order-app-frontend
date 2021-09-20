export const getMenuData: any[] = [
  // VB:REPLACE-START:MENU-CONFIG
  {
    title: 'Dashboards',
    key: '__dashboard',
    url: '/dashboard',
    icon: 'fe fe-home'
  },
  {
    title: 'Distributors',
    key: '62sqvb',
    url: '/distributors',
    icon: 'fe fe-users'
  },
  {
    title: 'Orders',
    key: '64sqvb',
    url: '/orders',
    icon: 'fe fe-file'
  },
  {
    title: 'Report',
    key: '783vor',
    url: '/report/orders',
    icon: 'fe fe-pie-chart',
    children: [
      {
        title: 'Total Orders',
        key: 'jlx0h',
        url: '/report/orders',
      },
      {
        title: 'Transaction History',
        key: '7yv6f',
        url: '/report/transaction-history',
      },
    ],
  },
  {
    title: 'Delivery Partner',
    key: '62sqvc',
    url: '/delivery-partner',
    icon: 'fe fe-user'
  },
  // VB:REPLACE-END:MENU-CONFIG
]
