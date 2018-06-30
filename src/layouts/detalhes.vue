<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
       color="white"
      >
      <q-btn
          flat
          dense
          round
          aria-label="logo"
          style="font-size: 1.2rem;color:#E8D23E"
          to="/"
      >
        <q-icon name="fas fa-arrow-circle-left" />
      </q-btn>

        <q-toolbar-title style="color:black; margin-left:0.8rem">
            <span style="font-family: 'Satisfy', cursive;"> MyPeers </span>
          <div slot="subtitle">Encontre seu par perfeito </div>
        </q-toolbar-title>
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
      leftDrawerOpen: this.$q.platform.is.desktop
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
