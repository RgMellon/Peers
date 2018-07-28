<template>
<div @click="produtoSelecionado()">
  <q-list inset-separator class="q-mt-md myshaddow" >
    <q-item multiline>
      <q-item-side class="img-avatar"
        :avatar="`${this.$pathImg()}${this.img}`"/>
        <q-item-main
          :label="this.nome"
          label-lines="1"
          :sublabel="this.descricao"
          sublabel-lines="4"
        />
      <q-item-side right :stamp="`R$ ${this.preco}`" />
    </q-item>
  </q-list>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ListaComponent',
  props: ['nome', 'descricao', 'img', 'preco', 'id'],
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      detalheProduto : 'detalheProduto'
    }),
    produtoSelecionado() {
      const objProd = {
        img: this.img,
        nome: this.nome,
        preco: this.preco,
        descricao: this.descricao,
        id: this.id
      }
      this.detalheProduto(objProd);
    }
  }
}
</script>

<style scoped>
  .myshaddow{
    border:0px;
        box-shadow: 1px 2px 0px 0px rgba(210, 204, 204, 0.49), 3px 8px 5px rgba(0, 0, 0, 0), 5px 5px 10px rgba(110, 107, 107, 0.19);
    }
    .img-avatar img{
      width: 45px;
      height: 45px;
    }

</style>
