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

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { retornaTokenLocal } from '../services/retornaTokenLocal';

export default {
  props: ['calcado'],
  data() {
    return {
      favorito: false,
    }
  },
  methods: {
    favoritar() {
      if(retornaTokenLocal() !== false) {
        this.favorito = !this.favorito;
        if(this.favorito == true){
          this.notify();
          this.add_calcado_favorito(this.calcado)
        }
      }else {
        this.$router.push('/usuario')
      }
    },
    notify () {
      this.$q.notify({
        icon: 'fas fas fa-thumbs-up',
        message: 'Adicionado aos favoritos'
      })
    },
    ...mapActions({
        add_calcado_favorito : 'add_calcado_favorito'
    })
  }
}
</script>

<style>
</style>
