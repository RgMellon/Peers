<template>
  <section class="cropper">
    <div style="font-size:40px;" class="btn-upload row justify-center">
      <label for="file-input" class="flex">
        <q-icon  name="fas fa-camera"/>
      </label>
      <input id="file-input" type="file" accept="image/*" @change="setImage"/>
    </div>
    <div style="width: 100%; height:300px; border: 1px solid gray; row justify-center">
      <vue-cropper
        ref='cropper'
        :guides="true"
        :view-mode="2"
        drag-mode="crop"
        :auto-crop-area="0.5"
        :min-container-width="250"
        :min-container-height="180"
        :background="true"
        :rotatable="true"
        :src="imgSrc"
        alt="Source Image"
        :img-style="{ 'width': '300px', 'height': '300px' }">
      </vue-cropper>
    </div>
    <div class="img-secao row justify-around items-center" style="margin-top:1rem">
      <q-btn :rounded="true" color="amber" icon="fas fa-undo" style="height:50px;" @click="rotate" v-if="imgSrc != ''"/>

      <div class="img-amostra" v-if="cropImg.length > 0">
        <img :src="cropImg" style="width: 100px; height: 100px;" />
      </div>

      <q-btn :rounded="true" color="blue"
            style="height:50px;" icon="fas fa-cut"
            @click="cropImage" v-if="imgSrc != ''"/>


    </div>
  </section>
</template>

<script>
import VueCropper from 'vue-cropperjs';
export default {
  name: 'ComponentCropper',
  data(){
    return {
      imgSrc: '',
      cropImg: '',
    };
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes('image/')) {
        alert('Por favor, selcione uma imagem.');
        return;
      }
      if (typeof FileReader === 'function') {
          this.$createImg(e)
            .then(res => this.imgSrc =  res)
            .then(img => this.$refs.cropper.replace(img));
          }
      else {
        alert('Desculpas, Erro');
      }
    },
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.$emit('imgCortada', this.cropImg)
    },
    rotate() {
      this.$refs.cropper.rotate(90);
      this.$emit('imgCortada', this.cropImg)
    },
  },
  };
</script>

<style scoped>
  #file-input{
    display: none;
  }
  .btn-upload {
    background: #d3d0d0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color:white;
    position:absolute;
    top:14%;
    left:42%;
  }
</style>
