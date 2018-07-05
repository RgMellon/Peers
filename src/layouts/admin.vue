<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- Footer -->
    <div class="fixed-bottom">
    <q-layout-footer >
      <q-tabs style="height:56px">
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
    </q-layout-footer>
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
