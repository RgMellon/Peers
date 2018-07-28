<template>
  <q-page padding>
    <lista v-for="i of this.dados" :key="i.id" class="lista-items"
          :nome="i.nome" :descricao="i.descricao"
          :img="i.img" :preco="i.preco">
    </lista>
  </q-page>
</template>

<script>

import ListaResultadosIndex from '../../components/ListaResultadosIndex';
import Produto from '../../services/Produto';

export default {
  name: 'PageListaProdutos',
  components: {
    'lista' : ListaResultadosIndex,
  },
  data(){
    return {
        dados: {}
    }
  },
  mounted() {
      Produto.getProdutosByLoja()
        .then(res => this.dados = res.data);
  },
}
</script>

<style scoped>
  .lista-items:first-child {
    margin-top:2rem;
  }
</style>
