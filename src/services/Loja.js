import sessionStorage from './sessionStorage';
import { pathUrl, pathUser } from '../plugins/path';
import { http } from './headerAuth';
import axios from 'axios';
import Storage from './localStorage';

export default {

  update(loja) {
    let token = Storage.get('usuarios').token;
    return axios.put(`${ pathUrl() }loja/${loja.id}`, loja, {
      headers: {
        Authorization : `Bearer ${ token }`
      }})
      .then(res => sessionStorage.set('loja', res));
  },

  store(loja) {
    let token = Storage.get('usuarios').token;
    return http.post(`${ pathUrl() }loja`, loja, {
      headers: {
        Authorization : `Bearer ${ token }`
      }})
      .then(res => sessionStorage.set('loja', res));
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
