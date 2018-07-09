<template>
  <q-layout>
    <q-toolbar class="fixed" style="z-index:9999;" color="white">
      <q-btn
        flat round dense
        icon="menu"
        @click="leftSide = !leftSide"
        color="amber"
      />

      <q-toolbar-title style="color:black; font-weight: 200;" >
        <router-link to="/admin" style="color:black;text-decoration:none "> Minha Loja </router-link>
      </q-toolbar-title>

      <q-btn flat round dense :to="{ name: 'add_prod'}" color="purple" icon="fas fa-plus-circle" />
      <q-btn flat round dense color="green" icon="alarm" />
    </q-toolbar>
    <q-layout-drawer
      side="left"
      v-model="leftSide"
    >
      <q-list no-border link inset-separator style="margin-top:4rem">
      <q-list-header style="background:#ffc107;color: white;">
          <q-btn flat dense round aria-label="logo" color="secondary" style="margin-top:-0.5rem"
            to="/" >
            <img src="statics/icons/icon-128x128.png" class="avatar" style="height:40px; width:40px">
          </q-btn>
          <span style="margin-left:2rem;"> MyPeers </span>
      </q-list-header>
      <q-item to="/adicionar/produto" style="margin-top:2rem">
        <q-item-side icon="fas fa-plus-circle" />
        <q-item-main label="Adicionar Produtos" sublabel="Adicione um novo produto" />
      </q-item>
      <q-item :to="{ name: 'lista_prod'}">
        <q-item-side icon="fas fa-list-ul" />
        <q-item-main label="Produtos" sublabel="ver produtos adicionados" />
      </q-item>
      <q-item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftSide: true
    }
  }
}
</script>

<style>
</style>
