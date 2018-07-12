<template>
  <q-page class="view-parallax">
      <parallax :fixed="true">
        <div class="img-parallax">
          <img :src="`http://localhost:8000/images/prod/${this.getProduto.img}`" alt=""
            class="shadow-4" style="width:100%; padding:0.5rem;">
        </div>
      </parallax>
      <section class="content-parallax">
      <section class="titulo row justify-center">
        <h1> {{ this.getProduto.nome }}</h1>
      </section>
      <section class="preco row justify-center">
        <p> R$ {{ this.getProduto.preco }} </p>
      </section>
      <section class="descricao row justify-center">
        <p> {{ this.getProduto.descricao }} </p>
      </section>
    </section>
    <modal style="position:fixed; bottom:0; right:0; left:0; margin-bottom:0px"> </modal>
  </q-page>
</template>

<script>
import Modal from '../components/Modal';
import Parallax from 'vue-parallaxy'
import { mapGetters } from 'vuex';

export default {
  name: 'PaginaDetalheCalcado',
  components: {
    modal: Modal,
    'parallax' : Parallax
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
    text-align: left;
    margin-left: 0.6rem;
  }
  .titulo h1{
    font-size: 1.5rem;
    color:#027be3;
  }
</style>
