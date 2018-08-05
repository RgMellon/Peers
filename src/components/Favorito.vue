<template>
  <div style="background:grey; height:1px;">
   <q-btn v-if ="this.favorito"
    round
    color="red"
    @click="favoritar"
    class="relative"
    icon="far fa-heart"
    style="right: -148px; font-size:1.1rem; top: -42px; z-index:9999"
  />
  <q-btn v-if ="!this.favorito"
    round
    @click="favoritar"
    class="relative"
    icon="far fa-heart"
    style="right: -148px;
          font-size:1.1rem;
          top: -42px;
          z-index:9999;
          color:red; background:white"
  />
  </div>
</template>

<script>


import sessionStorage from '../services/sessionStorage';
import Favorito from '../services/Favorito';

export default {
  props: ['calcado'],
  data() {
    return {
      favorito: false,
    }
  },
  methods: {
    favoritar() {
      let loja = sessionStorage.get('loja_detalhe');

      let objFav = {
        nome: this.calcado.nome,
        descricao : this.calcado.descricao,
        preco: this.calcado.preco,
        id: this.calcado.id,
        loja: loja.nome,
        lojaId: loja.id,
      }
      Favorito.set(objFav)
        .then(this.notify());
    },
    notify () {
      this.$q.notify({
        icon: 'fas fas fa-thumbs-up',
        message: 'Adicionado aos favoritos'
      })
    },

  }
}
</script>

<style>
</style>
