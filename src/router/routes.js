
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

      { path: '/usuario/cadastro', component: () => import('pages/usuario/cadastro'), name: 'cadastro' },
      { path: '/usuario/login', component: () => import('pages/usuario/login'), name: 'login' },
      {
        path: '',
        meta: { requiresAuth: true },
        component: () => import('pages/usuario/index'),
        name: 'ususario'
      },
      {
        path: '/usuario/favoritos/calcados',
        meta: { requiresAuth: true },
        component: () => import('pages/usuario/favoritos/calcados'),
        name: 'calcados.favoritos'
      },
      {
        path: '/usuario/favoritos/lojas',
        meta: { requiresAuth: true },
        component: () => import('pages/usuario/favoritos/lojas'),
        name: 'lojas.favoritos'
      },
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


  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
