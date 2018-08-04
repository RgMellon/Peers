
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
    //essa é a rota loja pro usuario final, sem ser o admin
  {
    path: '/loja',
    component: () => import('layouts/detalhes'),
    children: [
      { path: '', component: () => import('pages/loja') }
    ]
  },
//essa rota contem as ações do usuario, como cadastrar-se
// login, ver o perfil, os calçados e lojas favoritas
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
        path: '', component: () => import('pages/admin/dash'),
        name: 'admin'
      },
      {
        path: 'criar',
        meta: { requiresAuth: true },
        component: () => import('pages/admin/criar_loja'),
        name: 'criar_loja'
      },
      {
        path: 'editar',
        meta: { requiresAuth: true },
        component: () => import('pages/admin/editar_loja'),
        name: 'editar_loja'
      },
      {
        path: 'adiciona',
        meta: { haveLoja: true },
        component: () => import('pages/admin/add_produtos'),
        name: 'add_prod'
      },
      {
        path: 'lista',
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
