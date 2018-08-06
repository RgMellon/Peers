<template>
  <q-page>
    <section class="editar-loja" style="padding-top:4rem">
      <div class="img-editar-loja">
        <img :src="this.file" alt="">
      </div>
      <div class="btn-upload row justify-end">
        <div class="wrapper-btn">
          <upload @imgCortada="uploadFile" icon="fas fa-camera"
            size="30" class="btn-upload">
          </upload>
        </div>
      </div>
      <loja-update :imgUpload="this.file"/>
    </section>
 </q-page>
</template>

<script>
import LoJaUpdate from '../../components/admin/LojaUpdate';
import Upload from '../../components/Upload';
import sessionStorage from '../../services/sessionStorage';

export default {
  name: 'LojaEditar',

  data() {
    return {
      file: '',
    }
  },

  components: {
    'loja-update': LoJaUpdate,
    'upload': Upload,
  },
  mounted() {
    let loja = sessionStorage.get('loja').data;
    this.file = `http://localhost:8000/images/loja/${loja.img} `;
  },
  methods: {
    uploadFile(img){
      this.file = img;
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
    width: 100%;
    max-height: 300px;
  }
  .img-editar-loja {
    margin-top: -9px;
  }

  .wrapper-btn {
    background: white;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin-top: -30px;
    color:red;
  }
</style>
