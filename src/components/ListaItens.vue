<template>
<div>
  <q-card inline class="q-ma-sm" style="width: 100%; margin:0px; margin-top:2rem" v-for="i of 10">
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
        <div class="row justify-between">
        <span>Bota</span>
        <span color--text="secondary"> R$ 90.99 </span>
        </div>
        <span slot="subtitle">Bota Feminina cano curto</span>
      </q-card-title>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat color="secondary">Adicionar favoritos </q-btn>
        <q-btn flat color="">Visitar Loja</q-btn>
      </q-card-actions>
    </q-card>
</div>
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
