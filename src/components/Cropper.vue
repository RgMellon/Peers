<template>
  <section class="cropper">
    <!-- Botao Upload -->
    <div style="font-size:40px;" class="btn-upload row justify-center">
      <label for="file-input" class="flex">
        <q-icon  v-if="!this.loadImg" name="fas fa-camera"/>
      </label>
       <q-spinner v-if="this.loadImg" color="primary" size="40" />
      <input id="file-input" type="file" accept="image/*" @change="setImage"/>
    </div>

    <!-- Fim botao -->

    <div style="width: 100%;
      height:300px; background-image: url('statics/default.jpg');">

      <vue-cropper v-if="this.imgSrc"
        ref='cropper'
        :guides="true"
        :view-mode="2"
        drag-mode="none"
        :auto-crop-area="0.5"
        :container-width="300"
        :container-height="300"
        :aspectRatio="1"
        :background="true"
        :rotatable="true"
        :src="imgSrc"
        :viewMode="1"
        alt="Source Image"
        :highlight="true"
        :img-style="{ 'width': '300px', 'height': '300px' }">
      </vue-cropper>
    </div>
    <div class="img-secao row justify-around items-center" style="margin-top:1rem">
      <q-btn :rounded="true" color="amber" icon="fas fa-undo" style="height:50px;" @click="rotate" v-if="imgSrc != ''"/>

      <div class="img-amostra" v-if="cropImg.length > 0">
        <img :src="cropImg" style="width: 100px; height: 100px;" />
      </div>

      <q-btn :rounded="true" color="blue" :loading="load"
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
      load: false,
      loadImg: false
    };
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      this.loadImg = true;
      if (!file.type.includes('image/')) {
        alert('Por favor, selcione uma imagem.');
        return;
      }
      if (typeof FileReader === 'function') {
        this.$createImg(e)
          .then(res => this.imgSrc = res)
          .then(stop => this.loadImg = false)
      } else {
        alert('Desculpa, erro ao importar img');
      }
    },
    cropImage() {
      this.load = true;
       const getImt = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL('image/jpeg');
            this.$emit('imgCortada', this.cropImg)
            let load = false;
            resolve(load);
          }, 1000)

        })
      }
      getImt()
      .then(res => this.load = res);
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
    background: #d3d0d04d;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color:white;
    position:absolute;
    top:20%;
    left:42%;
  }
</style>
