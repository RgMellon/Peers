export default ({ Vue }) => {
  Vue.prototype.$createImg = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = (e) => {
        let imagem = e.target.result;
        resolve(imagem);
        reject('erro ao criar imagrm (creatImg)')
      }
      reader.readAsDataURL(files[0]);
    });

  };

}