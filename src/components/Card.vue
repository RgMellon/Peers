<template>
    <q-card inline class="q-ma-sm" style="width: 100%; margin:0px; margin-top:2rem">
      <q-item>
        <q-item-side avatar="statics/fachada.jpg" />
        <q-item-main>
          <q-item-tile label> {{ nomeEmpresa }} </q-item-tile>
          <q-item-tile sublabel> {{ descEmpresa }} </q-item-tile>
        </q-item-main>
      </q-item>
      <q-card-separator />
      <q-card-media style="display:flex; justify-content:center">
        <img :src="`statics/${this.img}`" style="width:250px" height="250px">
      </q-card-media>
      <q-card-title>
        <div class="row justify-between">
        <span> {{ this.nome}} </span>
        <div > R$ {{ this.preco }} </div>
        </div>
        <span slot="subtitle"> {{this.desc}} </span>
      </q-card-title>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat color="secondary">Adicionar favoritos </q-btn>
        <q-btn flat color="">Visitar Loja</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  props: ['nome', 'preco', 'desc', 'img', 'nomeEmpresa', 'descEmpresa'],
  name: 'CardItens',
  data () {
    return {}
  }
}
</script>

<style>
</style>
