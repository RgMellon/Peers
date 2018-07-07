import axios from 'axios'

export default ({ app, router, Vue }) => {
  Vue.prototype.$storeLoja = ($dados) => {
    const data = {
      // nome : 'asdsas',
      // bairro : 'Tal Bairro',
      // numero : 89,
      // img : 'tal img',
      // endereco : 'tal endereco',
      // wp : 9090092029032,
      // tell: 929130129,
      // sobre: '',
    }
    axios.post('http://localhost:8000/api/v1/lojas', data)
      .then(res => console.log(res.data));
  }
}
