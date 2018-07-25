import sessionStorage from './sessionStorage';
import { pathUrl } from '../plugins/path';
import axios from 'axios';

export default {

  update(loja) {
    let lojaStorage = sessionStorage.get('loja');

    return axios.put(`${pathUrl()}loja/${lojaStorage.id}`, loja)
          .then(res => sessionStorage.set('loja', res.data));

  },

  store(loja) {
    return axios.post(`${ path() }loja`, this.loja)
  }



}
