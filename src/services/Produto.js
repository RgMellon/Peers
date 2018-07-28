import { http } from './headerAuth';
import { pathUrl } from '../plugins/path';
import sessionStorage from './sessionStorage';

export default {

  store(prod) {
    prod.loja_id = sessionStorage.get('loja').id;
    return http.post(`${ pathUrl() }produtos`, prod)
  },

  getProdutosByLoja() {
    return http.get(`${ pathUrl() }produtos/loja/
      ${sessionStorage.get('loja_detalhe').id }`)
      .then(res => res)
  },

}





