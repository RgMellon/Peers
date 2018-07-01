<template>
  <div class="area-galeria row">
    <q-card inline class="q-ma-sm radius" style="width:150px; height: 150px">
      <q-card-media overlay-position="full">
        <img src="statics/allstar.jpg">
        <q-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
      </q-card-media>
    </q-card>
    <div class="grid-galeria">
      <q-card inline class="q-ma-sm radius" style="width:70px; height:65px" v-for="i of 4">
      <q-card-media overlay-position="full">
        <img src="statics/allstar.jpg">
        <q-card-title slot="overlay">
        </q-card-title>
      </q-card-media>
    </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .grid-galeria {
    width: 50%;
  }
  .radius {
    border-radius: 20px;
  }
</style>
