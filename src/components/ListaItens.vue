<template>
  <q-card inline class="q-ma-sm" style="width: 100%; margin:0px">
      <q-item>
        <q-item-side avatar="statics/fachada.jpg" />
        <q-item-main>
          <q-item-tile label> Raffas Calçado </q-item-tile>
          <q-item-tile sublabel> Melhores da região </q-item-tile>
        </q-item-main>
      </q-item>
      <q-card-separator />
      <q-card-media style="display:flex; justify-content:center">
        <img src="statics/bota.jpg" style="width:250px" height="250px">
      </q-card-media>
      <q-card-title>
        Bota
        <span slot="subtitle">Bota Feminina cano curto</span>
      </q-card-title>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat>Ver detalhe</q-btn>
        <q-btn flat>Visitar Loja</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'ListaItens',
  data () {
    return {}
  }
}
</script>

<style>
</style>
