<template>
  <q-page class="text-center page">
      <div class="area-img shadow-4 row justify-center" style="width:100%">
        <vue-galeria :img="[`${this.$pathImg()}${this.getProduto.img}`]" alt=""
       />
      </div>
      <div class="fav">
        <favorito :calcado="this.getProduto"/>
      </div>
      <section class="content" style="width:97%;">
        <section class="titulo">
          <h1> {{ this.getProduto.nome }}</h1>
        </section>
        <section class="preco">
          <p> R$ {{ this.getProduto.preco }} </p>
        </section>
        <div style="word-wrap: break-word;">
         <p class="caption"> {{ this.getProduto.descricao }} </p>
        </div>

        <section class="info-loja">
          <modal/>
        </section>
      </section>
  </q-page>
</template>

<script>
import Modal from '../components/Modal';
import { mapGetters } from 'vuex';
import Favortio from '../components/Favorito';
import vueGaleria from '../components/vueGaleria';

export default {
  name: 'PaginaDetalheCalcado',
  components: {
    modal: Modal,
    'vue-galeria': vueGaleria,
    'favorito' : Favortio
  },
  computed: {
    ...mapGetters({
        getProduto: 'getProduto'
    }),

  }
}
</script>

<style scoped>

  .content {
    background-color: #fff;
    position:absolute;
    width:100%;
    padding: 0.5rem;
    margin-top:1rem;
  }
  .preco{
    font-size: 1.2rem;
    color: gray;
  }


  .titulo h1{
    font-size: 1.5rem;
    color:#027be3;
  }

  .area-img, .page{
    padding: 0.5rem;
  }
</style>
