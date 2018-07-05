<template>
  <q-page>
    <q-fab color="amber" text-color="white" icon="fas fa-camera" style="right:-18.7rem; top:16rem">
    </q-fab>
    <parallax img="default.jpg">
      <section slot="conteudo">
        <loja-inputs></loja-inputs>
      </section>
    </parallax>
  </q-page>
</template>

<script>
import Parallax from '../components/Parallax';
import LojaInputs from '../components/admin/LojaInputs';
export default {
  name: 'PageDashBoard',
  components: {
    'parallax' : Parallax,
    'loja-inputs': LojaInputs
  }
}
</script>

<style>
</style>
