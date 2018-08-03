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
  </q-page>
</template>

<script>
import Upload from '../../components/Upload';

export default {
  name: 'CriarLoja',
  components: {
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
    },
  }
}
</script>

<style>
.img-upload {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/statics/default.jpg");
}
img {
  max-width: 100%;
  height: 300px;
  width: 100%;

}
.wrapper-btn {
  color: white;
  background: #027be3;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: -30px;
}
</style>
