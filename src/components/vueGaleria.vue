<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '330px', height: '400px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          'https://mypeers-api.herokuapp.com/images/prod/1531684362_5b4ba60a26d42.jpeg'

        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script>
