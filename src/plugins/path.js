const ambiente = 'prod';

export default ({ app, router, Vue }) => {
  Vue.prototype.$path = () => {
    return ambiente == 'dev' ? 'http://localhost:8000/api/v1/' : 'https://mypeers-api.herokuapp.com/api/v1/'
  };

  Vue.prototype.$pathImg = () => {
    return ambiente == 'dev' ? 'http://localhost:8000/images/prod/' : 'https://mypeers-api.herokuapp.com/images/prod/'
  }

  Vue.prototype.$pathUser = () => {
    return ambiente == 'dev' ? 'http://localhost:8000/api/' : 'https://mypeers-api.herokuapp.com/api/'
  }
}

export const  pathUrl = () => {
  return ambiente == 'dev' ? 'http://localhost:8000/api/v1/' : 'https://mypeers-api.herokuapp.com/api/v1/'
}
