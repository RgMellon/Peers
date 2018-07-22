<template>
<div>
{{ itemSelecionado }}
  <q-search color="warning" v-model="terms" placeholder="O que procura ?">
    <q-autocomplete :debounce="1000" @search="search" @selected="selected" />
  </q-search>
  </div>
</template>

<script>
import { filter } from 'quasar'
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      terms: '',
      itemSelecionado: '',
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, {field: 'value', list: this.parseCountries()}))
      }, 500)
    },
    selected(item) {
      this.$emit('selecionou', item.id);
    },
    parseCountries () {
      return this.getTags().map(element => {
          return {
          label: element.tag,
          sublabel: 'Label randomica',
          icon: 'fas fa-hashtag',
          value: element.tag,
          id: element.id
        }
      })
    },
    ...mapGetters({
        getTags: 'getTags',
    }),
  }
}
</script>
