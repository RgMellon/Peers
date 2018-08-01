import sessionStorage from './sessionStorage';
import { pathUrl } from '../plugins/path';
import { http } from './headerAuth';
import axios from 'axios';

export default {

  update(loja) {
    let lojaStorage = sessionStorage.get('loja');

    return http.put(`${ pathUrl() }loja/${lojaStorage.id}`, loja)
      .then(res => sessionStorage.set('loja', res.data));
  },

  store(loja) {
    return axios.post(`${ pathUrl() }loja`, loja)
  },

  getLojaByProd(id) {
    return axios.get(`${ pathUrl() }loja/produto/${id}`)
      .then(res => res.data)
      .catch(err => console.error('erro ao obter loja ', err))
  }

}
