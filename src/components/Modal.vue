<template>
  <div>
    <p class="caption" style="text-align: center;">
      Veja informações do vendedor
    </p>
    <q-btn
      @click="actionSheet = true"
      label="Me Mostrar"
      class="full-width"
      style="background: #E8D23E; color: white; margin-bottom:1rem;"
    />

    <q-action-sheet style="min-height:0px;"
        v-model="actionSheet"
        title="Informações"
        @ok="onOk"
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
            color: 'black'
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
    onOk (item) {
      if (item.handler) {
        // if we've already triggered a handler
        return
      }
      // this.$q.notify({
      //   color: 'secondary',
      //   message: `Clicked on "${item.label}"`
      // })
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