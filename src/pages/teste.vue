<template>
  <q-page>
    <input type="file" name="image" accept="image/*"
           style="font-size: 1.2em; padding: 10px 0;"
           @change="setImage" />

     <div style="width: 100%; height:300px; border: 1px solid gray; display: inline-block;">
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
          :img-style="{ 'width': '400px', 'height': '300px' }">
      </vue-cropper>
    </div>
    <img :src="cropImg" style="width: 300px; height: 300px; border: 1px solid gray" alt="Cropped Image" />
      <button @click="cropImage" v-if="imgSrc != ''" style="margin-right: 140px;">Crop</button>
      <button @click="rotate" v-if="imgSrc != ''">Rotate</button>
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
          alert('Please select an image file');
          return;
        }
        if (typeof FileReader === 'function') {
            this.$createImg(e)
              .then(res => this.imgSrc =  res)
              .then(img => this.$refs.cropper.replace(img));
            }

         else {
          alert('Sorry, FileReader API not supported');
        }
      },
      cropImage() {
        // get image data for post processing, e.g. upload or setting image src
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      },
      rotate() {
        // guess what this does :)
        this.$refs.cropper.rotate(90);
      },
    },
  };
</script>

<style>
</style>
