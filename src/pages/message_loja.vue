<template>
  <q-page padding>
    <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Eii, você ainda não posssui uma <strong>Loja</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/admin')"
    >Desejo Criar</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAviso',
}
</script>

<style>
</style>
