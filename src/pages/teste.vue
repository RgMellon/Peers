<template>
  <q-page padding class="text-center">
      <vue-galeria>
      </vue-galeria>
      <section class="content-parallax" style="width:97%;">
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
import Parallax from 'vue-parallaxy'
import vueGaleria from '../components/vueGaleria';
import { mapGetters } from 'vuex';

export default {
  name: 'PaginaDetalheCalcado',
  components: {
    modal: Modal,
    'parallax' : Parallax,
    'vue-galeria': vueGaleria,
  },
  computed: {
    ...mapGetters({
      getProduto: 'getProduto'
    }),

  }
}
</script>

<style scoped>

  .content-parallax {
    background-color: #fff;
    position:absolute;
    margin-top: -8rem;
    width:100%;
    padding: 0.5rem;
  }
  .preco{
    font-size: 1.2rem;
    color: gray;
  }
  .img-parallax {
    width: 100%;
    margin-top:3rem;
  }

  .descricao{
  }
  .titulo h1{
    font-size: 1.5rem;
    color:#027be3;
  }
  .info-loja {

  }
</style>
