<template>
  <q-page>
    <upload @addFile="uploadFile" icon="fas fa-camera"
       size="80" class="btn-upload">
    </upload>
    <parallax :img="this.file">
      <section slot="conteudo">
        <loja-inputs></loja-inputs>
      </section>
    </parallax>
  </q-page>
</template>

<script>
import Parallax from '../../components/Parallax';
import LojaInputs from '../../components/admin/LojaInputs';
import Upload from '../../components/Upload';
export default {
  name: 'PageDashBoard',
  components: {
    'parallax' : Parallax,
    'loja-inputs': LojaInputs,
    'upload': Upload,
  },
  data () {
    return {
      file: '',
    }
  },
  methods: {
    uploadFile(img){
      this.file = img;
    }
  },
}
</script>

<style scoped>
  .btn-upload {
    background: #f8f6f900;
    position: fixed;
    top: 105px;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    color:red;
  }
</style>
