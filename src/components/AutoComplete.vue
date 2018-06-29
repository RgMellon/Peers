<template>
<div>
{{ itemSelecionado }}
  <q-search color="amber" v-model="terms" placeholder="O que procura ?">
    <q-autocomplete :debounce="1000" @search="search" @selected="selected" />
  </q-search>
  </div>
</template>

<script>
import {filter } from 'quasar'
import categorias from 'assets/autocomplete.json';



function parseCountries () {
  return categorias.map(country => {
    return {
      label: country,
      sublabel: 'Label randomica',
      icon: 'fas fa-hashtag',

      value: country
    }
  })
}

export default {
  data () {
    return {
      terms: '',
      countries: parseCountries(),
      itemSelecionado: '',
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, {field: 'value', list: parseCountries()}))
      }, 800)
    },
    selected (item) {
      this.$emit('selecionou');
    },
  }
}
</script>
