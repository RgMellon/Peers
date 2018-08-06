import { pathUrl } from '../plugins/path';
import sessionStorage from './sessionStorage';
import axios from 'axios';
import { retornaTokenLocal } from '../services/retornaTokenLocal';

export default {

  store(prod) {
    prod.loja_id = sessionStorage.get('loja').data.id;
    return axios.post(`${ pathUrl() }produtos`, prod, {
      headers : {
        Authorization : `Bearer ${retornaTokenLocal()}`
      }
    })
  },

  getProdutosByLoja() {
    return axios.get(`${ pathUrl() }produtos/loja/
    ${sessionStorage.get('loja_detalhe').id }`)
    .then(res => res)
  },

  // get prods admin
  showProds() {
    return axios.get(`${ pathUrl() }produtos/loja/
      ${sessionStorage.get('loja').id }`)
      .then(res => res)
  },

  delete(prod) {
    return http.delete( `${ pathUrl() }produto`, {
      params: {
        id: prod.id ,
        img: prod.img
      }
    })
  }

}





