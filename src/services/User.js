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
    return http.get(`${ pathUser() }user`)
      .then(user => this.saveOnCache(user.data));
  },

  saveOnCache(user) {
    console.log('oiiiiiii');
    sessionStorage.set('user', user);
  }
}
