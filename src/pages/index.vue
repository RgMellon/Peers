<template>
  <q-page padding class="docs-input row justify-center">
    <info/>
    <div style="width: 500px; max-width: 90vw; margin-top:4rem;">
      <section class="busca">
        <auto-complete @selecionou="mostraResultado" style="margin-top:2rem"></auto-complete>
      </section>

      <section class="lista-itens" v-if="this.dados" style="margin-top:2rem" @click="redireciona">

        <lista v-for="i of this.dados" :key="i.id"
          :nome="i.nome" :descricao="i.descricao"
          :img="i.img" :preco="i.preco" :id="i.id">
        </lista>

      </section>
    </div>
  </q-page>
</template>
<script>
import AutoComplete from '../components/AutoComplete';
import TesteAuth from '../components/TesteAuth';
import Lista from '../components/ListaResultadosIndex';
import { mapActions } from 'vuex';
import Info from '../components/Info';
export default {
  name: 'PageIndex',
  components: {
    'auto-complete' : AutoComplete,
    'lista': Lista,
    'info': Info,
  },
  data () {
    return {
      mostra: false,
      dados: {},
    }
  },
  mounted() {
    this.$axios.get(`${this.$path()}tags`)
      .then(res => this.salvaTagsNoCache(res.data))
  },
  methods: {
    mostraResultado(item){
       this.$axios.get(`${this.$path()}tag/${item}`)
          .then(res => this.dados = res.data);
    },
    redireciona() {
      this.$redirecionaComLoad('/calcado/detalhes')
    },
    ...mapActions({
       addTags : 'addTags'
    }),

    salvaTagsNoCache(tags){
      this.addTags(tags);
    }
  }
}
</script>

<style scoped>
  .info {
    position:absolute;
    top:1px;
    right: 0;
    left: 0;
  }
</style>
