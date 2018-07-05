<template>
  <q-page class="view-parallax">
    <parallax :fixed="true">
      <img :src="`statics/${img}`" style="height:250px; margin-top:3rem">
    </parallax>
    <section class="content-parallax">
      <div style="padding:0.5rem;" class="column">
        <slot name="conteudo"></slot>
      </div>
    </section>
  </q-page>
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
    min-height:100%;
    position:absolute;
    top:42%;
    width:100%;
  }
</style>
