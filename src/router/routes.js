
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
    path: '/usuario',
    component: () => import('layouts/usuario'),
    children: [
      { path: '', meta: {requiresAuth: true},
        component: () => import('pages/autenticacao/usuario'), name: 'ususario'},
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: '', component: () => import('pages/admin/dash'), name: 'admin' },
    ]
  },

  {
    path: '/aviso',
    component: () => import('layouts/detalhes'),
    children: [
      { path: '', component: () => import('pages/message_loja'), name: 'aviso' },
    ]
  },

  {
    path: '/loja/admin',
    component: () => import('layouts/admin'),
    children: [
      {
        path: 'adiciona',
        meta: { haveLoja: true },
        component: () => import('pages/admin/add_produtos'),
        name: 'add_prod'
      },
      {
        path: '/lista',
        meta: { haveLoja: true },
        component: () => import('pages/admin/lista_produtos'),
        name: 'lista_prod'
      },
    ]
  },

  {
    path: '/autenticacao',
    component: () => import('layouts/autenticacao'),
    children: [
      { path: '/autenticacao/cadastro', component: () => import('pages/autenticacao/cadastro'), name: 'cadastro' },
      { path: '/autenticacao/login', component: () => import('pages/autenticacao/login'), name: 'login' },
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
