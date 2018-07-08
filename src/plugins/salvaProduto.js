import axios from 'axios'
export default ({ app, router, Vue }) => {
  Vue.prototype.$salvaProduto = (img) => {

    const data = {
      img,
      preco: 190.90,
      nome: 'teste',
      descricao: 'desc teste',
      loja_id: 1,
    }

    return axios.post('http://localhost:8000/api/v1/produtos', data)
              .then(res => res.data)
              .catch(err => console.error(err));
  }
}
