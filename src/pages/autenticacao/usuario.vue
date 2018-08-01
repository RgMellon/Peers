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
      <lista v-for="i of this.fav" :key="i.id" class="lista-items"
          :nome="i.nome" :descricao="i.descricao"
          :img="i.img" :preco="i.preco">
      </lista>
    </div>

    <div class="lojas-favoritas" v-if="loja">
      AREA DAS LOJAS
    </div>
  </q-page>
</template>

<script>

import ListaResultadosIndex from '../../components/ListaResultadosIndex';
import Favorito from '../../services/Favorito';
import User  from '../../services/User';
import sessionStorage from '../../services/sessionStorage';

export default {
  name: 'PagePerfilUsuario',

  components: {
    'lista' : ListaResultadosIndex,
  },

  data() {
    return {
      sapato: true,
      loja: false,
      fav: {},
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
    },

    verificaUsuario() {
      if(sessionStorage.get('user')){
        console.log('tem');
      }else{
       console.log('não tem');
      }
    },

    favoritos() {
      Favorito.get()
      .then(fav => this.fav = fav);
      },
    },

  created() {
    // this.verificaUsuario();
  },

}
</script>

<style>
.panel {
  height: 48px;
  background: rgb(232, 210, 62);
}
</style>
