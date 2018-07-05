
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
    component: () => import('layouts/detalhes'),
    children: [
      { path: '', component: () => import('pages/calcado-detalhe') }
    ]
  },
  {
    path: '/loja',
    component: () => import('layouts/detalhes'),
    children: [
      { path: '', component: () => import('pages/loja') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: '', component: () => import('pages/dash') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
