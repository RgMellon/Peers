import axios from 'axios';
import { pathUrl }  from './path';

export default ({ app, router, Vue }) => {
  Vue.prototype.$salvaProduto = (img) => {

    const data = {
      img,
      preco: 190.90,
      nome: 'teste',
      descricao: 'desc teste',
      loja_id: 1,
    }
   
    return  axios.post(`${pathUrl()}produtos`, data)
        .then(res => res.data)
        .catch(err => console.error(err));
  }
}
