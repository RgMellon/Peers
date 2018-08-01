export default {

  setStorageUser(token, refresh_token) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('usuarios',
        JSON.stringify({
        "token" : token,
        "refresh_token": refresh_token
      }))
      resolve(true)
    })
  },

  removeStorage(key) {
    localStorage.removeItem(key);
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
      return JSON.parse(localStorage.getItem(key))
  },


  clear() {
    localStorage.clear();
  }



}
