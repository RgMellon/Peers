<template>
  <q-page padding class="docs-input row justify-center">
    <q-alert icon="fas fa-user" class="info" color="info">
     Dica: Crie um perfil para melhor uma experiencia ;)
    <router-link style="color:white;"to="/lojas"> Criar </router-link>
    </q-alert>
    <main style="width: 500px; max-width: 90vw; margin-top:4rem;">
      <section class="busca">
        <auto-complete @selecionou="mostraResultado" style="margin-top:2rem"></auto-complete>
      </section>
      <section class="lista-itens" v-if="this.mostra" style="margin-top:2rem" @click="redireciona">
        <lista v-for="i of this.dados" :key="i.id"
          :nome="i.nome" :descricao="i.descricao"
          :img="i.img" :preco="i.preco">
        </lista>
      </section>
    </main>
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

<style scoped>
  .info {
    position:absolute;
    top:1px;
    right: 0;
    left: 0;
  }
</style>
