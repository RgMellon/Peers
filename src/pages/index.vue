<template>
  <q-page padding class="docs-input row justify-center">
      <div style="width: 500px; max-width: 90vw;" class="main">
          <section class="busca">
            <auto-complete @selecionou="mostraResultado" style="margin-top:2rem"></auto-complete>
          </section>
          <section class="lista-itens" v-if="this.mostra" style="margin-top:2rem" @click="redireciona">
            <lista v-for="i of this.dados" :key="i.id"
              :nome="i.nome" :descricao="i.descricao"
              :img="i.img" :preco="i.preco">
            </lista>
          </section>
          <section class="area-login row">
             <q-btn color="primary" icon="fas fa-user" class="full-width" label="Login" />
          </section>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
import AutoComplete from '../components/AutoComplete';
import dados from 'assets/dados.json';
import Lista from '../components/ListaResultadosIndex';

export default {
  name: 'PageIndex',
  components: {
    'auto-complete' : AutoComplete,
    'lista': Lista,
  },
  data () {
    return {
      mostra: false,
      dados,
    }
  },
  methods: {
    mostraResultado(){
      this.mostra = true;
    },
    redireciona() {
      this.$redirecionaComLoad('/calcado/detalhes')
    }
  }
}
</script>

<style>
    .main {display: flex;
    flex-direction: column;
    justify-content: space-between;}
</style>
