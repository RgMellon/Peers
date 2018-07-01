<template>
  <q-page padding>
    <section class="fachada-loja fixed-top absolute-top">
      <img src="statics/fachada.jpg">
    </section>
    <section class="info-loja relative-position">
      <section class="galeria">
        <galeria></galeria>
      </section>
    </section>
  </q-page>
</template>

<script>
import Galeria from '../components/loja/Galeria';
export default {
  name: 'PageLoja',
  components: {
    galeria: Galeria,
  }
}
</script>

<style scoped>
  .fachada-loja {
    width: 100%;
    height: 200px;
  }
  .fachada-loja img {
    height: 200px;
    width: 100%;
  }

  .info-loja {
    top: 14rem;
  }
</style>
