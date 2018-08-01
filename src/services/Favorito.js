import sessionStorage from './sessionStorage';
import { pathUser } from '../plugins/path';
import { http } from './headerAuth';
import axios from 'axios';


export default {

  set(item) {
    item.user = sessionStorage.get('user').id;
    return http.post(`${ pathUser() }fav`, item)
      .then(res => console.log(res));
  },

  get(){
    const array = [];

      axios.get(`${ pathUser() }fav`, {
        params : {
          'user' : sessionStorage.get('user').id,
        }
      })
        .then(res => res.data.forEach(element => array.push(JSON.parse(element))));

      return new Promise((resolve, reject) => {
        resolve(array);
      });
  }
}
