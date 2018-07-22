<template>
  <q-page >

    <q-tabs class="shadow-2 panel absolute-bottom"
      style="background: rgb(232, 210, 62); position:fixed" color="transparent">
      <q-tab @click="mostraAreaSapato()" slot="title" icon="fab fa-gratipay"
        style="font-size:11px;" />
      <q-tab @click="mostraLoja()" slot="title" icon="fas fa-store-alt"
      style="font-size:11px;" />
    </q-tabs>

    <div class="sapatos-favoritos" v-if="sapato">
      <lista v-for="i of this.fav_calc" :key="i.id" class="lista-items"
          :nome="i.detalhe.nome" :descricao="i.detalhe.descricao"
          :img="i.detalhe.img" :preco="i.detalhe.preco">
      </lista>
    </div>

    <div class="lojas-favoritas" v-if="loja">
      AREA DAS LOJAS
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import ListaResultadosIndex from '../../components/ListaResultadosIndex';

export default {
  name: 'PagePerfilUsuario',

  components: {
    'lista' : ListaResultadosIndex,
  },

  computed: {
    ...mapGetters({
      usuario: 'getUsuario',
      fav_calc: 'getCalcadoFavorito'
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
