<template>
  <div class="view-parallax">
    <parallax :fixed="true">
      <div v-if="this.img" class="row justify-center">
        <img  v-if="!this.prod" :src="`${img}`" style="height:100%; margin-top:3rem; width: 100%;">
        <img  v-if="this.prod" :src="`${img}`" class="img-produto shadow-4">
      </div>
      <div v-else class="no-img">
        <img src="statics/default.jpg" style="height:100%; margin-top:3rem; width: 100%;">
      </div>
    </parallax>
    <section class="content-parallax">
      <div class="column">
        <slot name="conteudo"></slot>
      </div>
    </section>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'ComponentImageParallax',
  props:['img', 'prod'],
  components: {
    'parallax': Parallax,
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .content-parallax {
    background-color: #fff;
    position:absolute;
    top:41%;
    width:100%;
  }
  .img-produto {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .no-img {
    height: 200px;
  }
</style>
