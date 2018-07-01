<template>
  <q-page class="view-parallax">
    <div class="q-parallax" style="height: 200px;">
      <div class="q-parallax-image">
        <q-parallax src="statics/fachada.jpg" class="img-paralax" style="height:300px">
          <div slot="loading">Loading...</div>
        </q-parallax>
      </div>
    </div>
    <div style="padding:0.5rem;">
      <p v-for="n in 7" :key="`e-${n}`" class="par-text">{{ loremipsum }}</p>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>

<style scoped>
  .img-paralax{
    height: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>