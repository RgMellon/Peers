import { existsLoja } from '../aux/existsLoja';

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if(to.meta.haveLoja && !existsLoja()){
      next('/aviso')
    }
      next()
    });
}
