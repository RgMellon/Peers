import { retornaTokenLocal } from '../services/retornaTokenLocal';

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !retornaTokenLocal()){
        next('/autenticacao/login')
    }
      next()
    });
}
