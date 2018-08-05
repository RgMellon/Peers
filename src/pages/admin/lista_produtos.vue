<template>
  <q-page padding>
    <div v-for="i of this.dados" :key="i.id" class="itens row justify-end">
      <lista class="lista-items"
          :nome="i.nome" :descricao="i.descricao"
          :img="i.img" :preco="i.preco">
      </lista>

      <q-btn round class="btn-delete" @click="remove(i)"
        icon="fas fa-trash-alt"
        color="red" />
    </div>
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
      Produto.showProds()
        .then(res => this.dados = res.data);
  },
  methods:{
    remove(i) {
      this.$q.dialog({
        title: 'Aviso',
        message: `Deseja excluir ${i.nome} ?`,
        color: 'primary',
        ok: true,
        cancel: true,
        preventClose: true,
        position: 'bottom',
      })
      .then(() => {
        Produto.delete(i);
      })
      .catch(() => {

      })
    }
  }
}
</script>

<style scoped>
  .itens:first-child {
    margin-top:2rem;
  }

  .lista-items {
    width: 100%;
  }

  .btn-delete {
    top: -32px;
    right: -5px;
  }

  .itens {
    margin-top: -2rem;
  }

</style>
