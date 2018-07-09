const ambiente = 'dev';
export default ({ app, router, Vue }) => {
}

export const  pathUrl = () => {
    return ambiente == 'dev' ? 'http://localhost:8000/api/v1/' : 'https://mypeers-api.herokuapp.com/api/v1/'
}
