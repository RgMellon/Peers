<template>
  <q-page>
    <div class="img-upload" >
      <img :src="this.file" alt="">
    </div>
    <div class="btn-upload row justify-end">
      <div class="wrapper-btn">
        <upload @imgCortada="uploadFile" icon="fas fa-camera"
          size="30" class="btn-upload">
        </upload>
      </div>
    </div>
    <section class="inputs-loja">
      <loja-criar :img="this.file">

      </loja-criar>
    </section>
  </q-page>
</template>

<script>
import Upload from '../../components/Upload';
import LojaCreate from '../../components/admin/LojaCreate';

export default {
  name: 'CriarLoja',
  components: {
    'upload': Upload,
    'loja-criar' : LojaCreate
  },
  data () {
    return {
      file: '',
    }
  },
  methods: {
    uploadFile(img){
      this.file = img;
    },
  }
}
</script>

<style scoped>
.img-upload {
  padding-top: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 100%;
  width: 100%;
}

.wrapper-btn {
  background: gray;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: -30px;
}
</style>
