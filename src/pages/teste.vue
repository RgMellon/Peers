<template>
  <q-page padding>
    <div style="font-size:60px; color:gray; margin-bottom:1rem; margin-top:-1rem;" class="cor-icone row justify-center">
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
    <!-- area da img amostra e botoes -->
    <div class="img-secao row justify-around items-center" style="margin-top:1rem">
      <q-btn :rounded="true" color="amber" icon="fas fa-undo" style="height:50px;" @click="rotate" v-if="imgSrc != ''"/>

      <img :src="cropImg" style="width: 100px;
            height: 100px; border: 1px solid gray"
            alt="img cortada" />

      <q-btn :rounded="true" color="blue" style="height:50px;" icon="fas fa-cut" @click="cropImage" v-if="imgSrc != ''"
      />
    </div>
    <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
    label="Salvar" />
  </q-page>
</template>

<script>
import VueCropper from 'vue-cropperjs';
export default {
  components:{
    'vue-cropper': VueCropper,
  },data() {
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
          alert('Desculpas, Errp');
        }
      },
      cropImage() {
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      },
      rotate() {
        this.$refs.cropper.rotate(90);
      },
    },
  };
</script>

<style scoped>
  #file-input{
    display: none;
  }
</style>
