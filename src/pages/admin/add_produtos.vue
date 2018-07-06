<template>
  <q-page>
    <upload @addFile="uploadFile" icon="fas fa-plus"
       size="80" class="btn-upload">
    </upload>
    <parallax :img="this.file">
      <section slot="conteudo">
        <ProdutoInputs></ProdutoInputs>
      </section>
    </parallax>
  </q-page>
</template>

<script>
import Parallax from '../../components/Parallax';
import Upload from '../../components/Upload';
import ProdutoInputs from  '../../components/admin/ProdutoInputs';
export default {
  name: 'PageAddProduto',
  components: {
    'parallax' : Parallax,
    'upload': Upload,
    ProdutoInputs
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
