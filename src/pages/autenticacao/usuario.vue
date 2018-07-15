<template>
  <q-page padding>
    ola :
    {{ this.usuario.nome }}
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'PagePerfilUsuario',
  computed: {
    ...mapGetters({
      usuario: 'getUsuario',
    })
  }
}
</script>

<style>
</style>
