<template>
  <div>
    <p class="caption" style="text-align: center; ">
      Veja informações do vendedor
    </p>

    <q-btn
      @click="actionSheet = true"
      label="Me Mostrar"
      class="full-width"
      style="background: #2196F3; color: white;"
    />

    <q-action-sheet style="min-height:0px;"
        v-model="actionSheet"
        title="Informações"
        @cancel="onCancel"
        :actions="[
          {
            label: this.loja.nome,
            icon: 'fas fa-building',
            color: 'red',
            handler: deleteAction
          },
          {
            label: this.loja.endereco,
            icon: 'fas fa-map',
            color: 'primary'
          },
          {
            label: 'Ver mais Produtos dessa loja',
            icon: 'far fa-eye',
            color: 'black',
            handler: redirecionaLoja
          },
        ]"
    />
  </div>
</template>

<script>

import Loja from '../services/Loja';
import sessionStorage from '../services/sessionStorage';

export default {
  props: ['idProduto'],

  data () {
    return {
      actionSheet: false,
      loja : {}
    }
  },
  mounted() {
    this.getLojaByProd()

  },
  methods: {
    deleteAction () {
      // this.$q.notify('Deletando...')
    },
    redirecionaLoja(){
      this.$redirecionaComLoad('/loja')
    },
    onCancel () {
      // this.$q.notify({
      //   color: 'tertiary',
      //   icon: 'done',
      //   message: 'Action Sheet was dismissed'
      // })
    },
    getLojaByProd() {
      Loja.getLojaByProd(this.idProduto)
        .then(res => this.loja = res)
        .then(storage => sessionStorage.set('loja_detalhe', this.loja))
    }
  },

}
</script>
