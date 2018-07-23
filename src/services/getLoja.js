import axios from 'axios';
import { pathUser }  from '../plugins/path';

export const getLoja = (id) => {
  return axios.get(`${pathUser()}v1/loja/user/${id}`)
        .then(res => res)
        
}