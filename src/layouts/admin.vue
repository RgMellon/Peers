<template>
  <q-layout>
    <q-toolbar class="fixed" style="z-index:9999;" color="white">
      <q-btn
        flat round dense
        icon="menu"
        @click="leftSide = !leftSide"
        color="amber"
      />

      <q-toolbar-title style="color:black; font-weight: 200;">
        Minha Loja
      </q-toolbar-title>

      <q-btn flat round dense color="purple" icon="mail" />
      <q-btn flat round dense color="green" icon="alarm" />
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- Footer 
    <div class="fixed-bottom">
    <q-layout-footer >
      <q-tabs style="height:50px">
        <q-route-tab
          slot="title"
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-layout-footer>-->
  </div>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
