<template>
  <q-page>
  <header-fav cor="background: #673AB7;">
      <div slot="bread">
        <q-breadcrumbs  separator="/" active-color="amber" color="light">
              <q-breadcrumbs-el label="Perfil" to="/usuario" />
              <q-breadcrumbs-el label="Lojas favoritas" />
        </q-breadcrumbs>
      </div>
    </header-fav>
  </q-page>
</template>

<script>
import headerFav from './template-header';
export default {
  name: 'LojasFavoritas',
  components: {
    'header-fav': headerFav,
  }
}
</script>

<style>
</style>
