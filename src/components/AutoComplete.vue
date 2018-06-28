<template>
  <q-search v-model="terms" placeholder="O que procura ?">
    <q-autocomplete :debounce="1000" @search="search" />
  </q-search>
</template>

<script>
import {filter } from 'quasar'
import categorias from 'assets/autocomplete.json';

function getRandomStamp () {
  if (Math.floor(Math.random() * 50) % 3 === 0) {
    return `${Math.floor(Math.random() * 10)} min`
  }
}

function parseCountries () {
  return categorias.map(country => {
    return {
      label: country,
      sublabel: 'Label randomica',
      icon: 'fas fa-hashtag',
      stamp: getRandomStamp(),
      value: country
    }
  })
}

export default {
  data () {
    return {
      terms: '',
      countries: parseCountries(),
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, {field: 'value', list: parseCountries()}))
      }, 1000)
    },
    selected (item) {
      this.$q.notify(`Selected suggestion "${ item.label}"`)
    },
  }
}
</script>
