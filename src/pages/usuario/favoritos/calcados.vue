<template>
  <q-page>
    <header-fav cor="background:#324c73;">
      <div slot="bread">
        <q-breadcrumbs  separator="/" active-color="amber" color="light">
              <q-breadcrumbs-el label="Perfil" to="/usuario" />
              <q-breadcrumbs-el label="Calçados favoritos" />
        </q-breadcrumbs>
      </div>
    </header-fav>
  </q-page>
</template>

<script>
import headerFav from './template-header';
export default {
  name: 'CalcadosFavoritos',
  components : {
    'header-fav': headerFav
  }
}
</script>

<style>

</style>
