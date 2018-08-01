import sessionStorage from '../services/sessionStorage';

export const existsLoja = () => {
  if(sessionStorage.get('loja') == '') {
    return false;
  }else {
    return true;
  }
}
