export const retornaTokenLocal = () => {
  const usuario = localStorage.getItem('usuario');
  if(usuario === null){
    return false;
  }else{
    return JSON.parse(usuario).token;
  }
}
