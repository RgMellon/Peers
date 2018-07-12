<template>
  <div>
    <p class="caption" style="text-align: center; margin-top:1rem">
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
            label: 'Loja Raffs',
            icon: 'fas fa-building',
            color: 'red',
            handler: deleteAction
          },
          {
            label: 'Rua Tal numero tal',
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
export default {
  data () {
    return {
      actionSheet: false,
    }
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
    }
  }
}
</script>
