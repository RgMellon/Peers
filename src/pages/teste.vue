<template>
  <q-page>
    <q-search v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete @search="search" />
    </q-search>

    <input type="text" class="" v-model="queryString" v-on:keyup="getResults()">
     <ul>
       <div v-if="this.queryString">
          <li v-for="res of this.resultadoQuery">
            {{res.tag}}
          </li>
        </div>
      <div v-else>
         Vazio como minha barriga
      </div>
     </ul>

  </q-page>
</template>

<script>
  import { filter } from 'quasar'
  import { mapGetters } from 'vuex';
  export default {
    components:{

    },
    mounted() {
     this.getTags().forEach(element => {
      console.log(element.tag)
     });
    },
    data() {
      return {
        queryString: '',
        resultadoQuery: [],
        terms: ''
      }
    },
    methods: {
      ...mapGetters({
          getTags: 'getTags',
      }),

      search (terms, done) {
        setTimeout(() => {
          done(filter(terms, {field: 'value', list: this.getResults()}))
        }, 1000)
      },
    }
  }
</script>
