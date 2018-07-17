export const retornaTokenLocal = () => {
  const usuario = localStorage.getItem('usuarios');
  if(usuario === null){
    return false;
  }else{
    return JSON.parse(usuario).token;
  }
}
