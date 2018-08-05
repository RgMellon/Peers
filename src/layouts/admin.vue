<template>
  <q-layout>
    <q-toolbar class="fixed" style="z-index:9999; justify-content: space-between;" color="primary">
        <q-btn
          @click="$router.go(-1)"
          flat
          dense
          round
          aria-label="logo"
          style="font-size: 1.2rem;color:white"
        > <q-icon name="fas fa-arrow-circle-left" />
      </q-btn>

      <q-btn
          @click="$router.push('/usuario')"
          flat
          dense
          round
          aria-label="logo"
          style="font-size: 1rem;color:white"
        > <q-icon name="fas fa-user" />
      </q-btn>

      <q-btn
          @click="$router.push('/loja/admin')"
          flat
          dense
          round
          aria-label="logo"
          style="font-size: 1.2rem;color:white"
        > <q-icon name="store" />
      </q-btn>



    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
