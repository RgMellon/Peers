<template>
  <q-list>
        <q-item style="padding:11px"
          link
          v-for="dialog in types"
          :key="dialog.title"
          @click.native="dialog.handler()"
          v-ripple.mat
        >
          <q-item-side :color="dialog.color" :icon="dialog.icon" />
          <q-item-main :label="dialog.label" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>

        <q-item-separator />
      </q-list>
</template>

<script>
export default {
  name: 'ComponentAcoesUsuario',
  data () {
    return {
      types: [
        {
          label: 'Editar Loja',
          icon: 'fas fa-cogs',
          color:'blue',
          handler: () => {
            this.$router.push({ name : 'editar_loja'})
          }
        },
        {
          label: 'Adicionar item',
          icon: 'fas fa-plus',
          color: 'purple',
          handler: () => {
            this.$router.push({ name : 'add_prod'})
          }
        },
        {
          label: 'Lista de itens',
          icon: 'fas fa-list-ul',
          color: 'green',
          handler: () => {
            this.$router.push({ name : 'lista_prod'})
          }
        }
      ]
    }
  }
}
</script>

<style>
</style>
