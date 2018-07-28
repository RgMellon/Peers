<template>
  <q-list inset-separator style="border:0px;">
    <q-item style="margin-bottom:1rem;">
      <q-item-side icon="fas fa-map" color="amber" />
      <q-item-main :label="this.endereco" />
    </q-item>
    <q-item style="margin-bottom:1rem;">
      <q-item-side icon="fas fa-phone" color="red" />
      <q-item-main :label="this.telefone" />
    </q-item>
    <q-item style="margin-bottom:1rem;">
      <q-item-side icon="fab fa-whatsapp" color="secondary" />
      <q-item-main :label="this.wp" />
    </q-item>
  </q-list>
</template>

<script>
export default {
  props: ['endereco', 'wp', 'telefone'],

  name: 'LojaContatos',
  data () {
    return {}
  }
}
</script>

<style>
</style>
