import axios from 'axios';
import { pathUrl }  from './path';

export default ({ app, router, Vue }) => {
  Vue.prototype.$salvaProduto = (img, nome, preco, descricao, tags) => {
    const data = {
      img,
      preco,
      nome,
      descricao,
      tags,
      loja_id: 1,
    }
    return  axios.post(`${pathUrl()}produtos`, data)
        .then(res => res.data)
        .catch(err => console.error(err));
  }
}
