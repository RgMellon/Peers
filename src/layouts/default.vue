<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="white">

      <q-btn flat dense round aria-label="logo" color="secondary" style="margin-top:-0.5rem"
        to="/" >
        <img src="statics/icons/icon-128x128.png" class="avatar" style="height:40px; width:40px">
      </q-btn>

      <q-toolbar-title style="color:black; margin-left:0.8rem">
          <span style="font-family: 'Satisfy', cursive;"> MyPeers </span>
          <div slot="subtitle"> Encontre seu par perfeito </div>
      </q-toolbar-title>

      <q-btn style="font-size:1.1rem"
        flat round dense
        icon="fas fa-user-circle q-item-icon "
        color='grey'
        :to="{ name: 'ususario'}"
      />
    </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Satisfy');
</style>
