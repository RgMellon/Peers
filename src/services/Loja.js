import sessionStorage from './sessionStorage';
import { pathUrl, pathUser } from '../plugins/path';
import { http } from './headerAuth';
import axios from 'axios';

export default {

  update(loja) {
    let lojaStorage = sessionStorage.get('loja');

    return http.put(`${ pathUrl() }loja/${lojaStorage.id}`, loja)
      .then(res => sessionStorage.set('loja', res.data));
  },

  store(loja) {
    return http.post(`${ pathUrl() }loja`, loja)
  },

  getLojaByProd(id) {
    return axios.get(`${ pathUrl() }loja/produto/${id}`)
      .then(res => res.data)
      .catch(err => console.error('erro ao obter loja ', err))
  },

  getLojaByUser( id ){
    if(sessionStorage.get('loja')){
      return new Promise((resolve, reject) => {
        resolve(sessionStorage.get('loja'))
        reject(err => { throw new Error(err )})
      })
    }else {
      return axios.get(`${pathUser()}v1/loja/user/${id}`)
        .then(res => sessionStorage.set('loja', res))
        .then(loja => sessionStorage.get('loja'))
    }

  }
}
