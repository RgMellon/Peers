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
      <q-btn
        flat round dense
        @click="showRight = !showRight"
        icon="menu"
        color='black'
      />
      <q-layout-drawer side="right"  v-model="showRight">
          <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
      <q-item to="/forum">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item to="/chat">
        <q-item-side icon="chat" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
      </q-item>
      <q-item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
      </q-layout-drawer>
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
      leftDrawerOpen: this.$q.platform.is.desktop,
      showRight: true
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
