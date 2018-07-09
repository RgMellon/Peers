import axios from 'axios';
import { pathUrl }  from './path';

export default ({ app, router, Vue }) => {
  console.log('oieeeeee', pathUrl())
  Vue.prototype.$uploadImg = (img) => {
    const data = {
      img,
    }
    return axios.post(`${pathUrl()}img`, data);
  }
}
