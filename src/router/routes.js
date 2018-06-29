
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/calcado/detalhes',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/calcado-detalhe') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
