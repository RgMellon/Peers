
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
    path: '/teste',
    component: () => import('layouts/detalhes'),
    children: [
      { path: '', component: () => import('pages/teste') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: '', component: () => import('pages/admin//dash'), name: 'admin' },
      { path: '/adicionar/produto',
               component: () => import('pages/admin/add_produtos'), name: 'add_prod'}
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
