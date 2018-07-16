<template>
  <q-page >
    <q-tabs class="shadow-2 panel fixed-bottom, absolute-bottom"
      style="background: rgb(232, 210, 62)" color="transparent">
      <q-tab @click="mostraAreaSapato()" slot="title" icon="fab fa-gratipay"
        style="font-size:11px;" />
      <q-tab @click="mostraLoja()" slot="title" icon="fas fa-store-alt"
      style="font-size:11px;" />
    </q-tabs>
    <div class="sapatos-favoritos" v-if="sapato">
        AREA DOS SAPATOS
    </div>
    <div class="lojas-favoritas" v-if="loja">
      AREA DAS LOJAS
    </div>
    OLAAR
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'PagePerfilUsuario',
  computed: {
    ...mapGetters({
      usuario: 'getUsuario',
    }),

  },
  data() {
    return {
      sapato: true,
      loja: false
    }
  },

  methods: {
    mostraAreaSapato() {
      this.sapato = true;
      this.loja = false;
    },
    mostraLoja() {
      this.sapato = false;
      this.loja = true;
    }

  }
}
</script>

<style>
.panel {
  height: 48px;
  background: rgb(232, 210, 62);
}
</style>
