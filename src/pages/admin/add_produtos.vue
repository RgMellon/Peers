<template>
  <q-page>
   <parallax :img="this.file" :prod="true">
      <section slot="conteudo">
        <ProdutoInputs @imgRetornada="imgUpload"></ProdutoInputs>
      </section>
    </parallax>
  </q-page>
</template>

<script>
import Parallax from '../../components/Parallax';
import ProdutoInputs from  '../../components/admin/ProdutoInputs';
export default {
  name: 'PageAddProduto',
  components: {
    'parallax' : Parallax,
    ProdutoInputs
  },
  data () {
    return {
      file: '',
    }
  },
  methods: {
    imgUpload(img){
      this.file = img;
    },

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
