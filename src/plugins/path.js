const ambiente = 'prod';

export default ({ app, router, Vue }) => {
  Vue.prototype.$path = () => {
    return ambiente == 'dev' ? 'http://localhost:8000/api/v1/' : 'https://mypeers-api.herokuapp.com/api/v1/'
  }
}

export const  pathUrl = () => {
  return ambiente == 'dev' ? 'http://localhost:8000/api/v1/' : 'https://mypeers-api.herokuapp.com/api/v1/'
}
