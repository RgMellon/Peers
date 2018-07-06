<template>
  <div class="view-parallax">
    <parallax :fixed="true">
      <div v-if="this.img" class="row justify-center">
        <img :src="`${img}`" style="height:250px; margin-top:3rem; width: 100%;">
      </div>
      <div v-else class="no-img">
      </div>
    </parallax>
    <section class="content-parallax">
      <div style="padding:0.5rem;" class="column">
        <slot name="conteudo"></slot>
      </div>
    </section>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'ComponentImageParallax',
  props:['img'],
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
    top:42%;
    width:100%;
  }
</style>
