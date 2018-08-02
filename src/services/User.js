import axios from 'axios';
import Storage from './localStorage';
import sessionStorage from './sessionStorage';
import { pathUser } from '../plugins/path';
import { http } from './headerAuth';


export default {

  login(user) {
    return axios.post(`${ pathUser() }login`,  user)
    .then(res => res.data)
    .then( saveOnCache => Storage.setStorageUser(saveOnCache.access_token, saveOnCache.refresh_token))
    .catch(err =>  {
      if( err.response.status == 401) {
        throw new Error('Credenciais incorretas');
      }})
  },

  register(user) {
    return axios.post(`${ pathUser() }register`, user)
    .then(res => res.data)
    .then(saveOnCache => Storage.setStorageUser(saveOnCache.access_token, saveOnCache.refresh_token))
  },

  getUser() {
    if(sessionStorage.get('user')) {
      return new Promise((resolve, reject) => {
        resolve(sessionStorage.get('user'));
        reject(err => { throw new Error('Problemas ao autenticar')})
      })
    }else {
      let token = Storage.get('usuarios').token;
      return http.get(`${ pathUser() }user`, {
        headers: {
          Authorization : `Bearer ${ token }`
        }
      }).then(res => sessionStorage.set('user', res.data))
        .then( user => sessionStorage.get('user'))
    }
  },

}
