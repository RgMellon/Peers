<template>
  <q-page>
    <section class="editar-loja" style="padding-top:4rem">
      <div class="img-editar-loja">
        <img :src="this.file" alt="">
      </div>
      <div class="wrapper-btn">
        <upload @imgCortada="uploadFile" icon="fas fa-camera"
          size="30" class="btn-upload">
        </upload>
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
</style>
