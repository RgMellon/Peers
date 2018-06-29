<template>
  <q-page padding class="docs-input row justify-center">
      <div style="width: 500px; max-width: 90vw;">
          <section class="busca">
            <auto-complete @selecionou="mostraResultado" style="margin-top:2rem"></auto-complete>
          </section>
          <section class="itens-card" v-if="this.mostra" style="margin-top:2rem">
            <!-- <card  v-for="i of this.dados"
                :nome="i.nome" :preco="i.preco" :desc="i.descricao"
                :img="i.img" :nomeEmpresa="i.nome_empresa"
                :descEmpresa="i.descricao_empresa"
                >
            </card> -->
            <lista v-for="i of this.dados"
              :nome="i.nome" :descricao="i.descricao"
              :img="i.img" :preco="i.preco">
            </lista>
          </section>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
import AutoComplete from '../components/AutoComplete';
import Card from '../components/Card';
import dados from 'assets/dados.json';
import Lista from '../components/Lista';

export default {
  name: 'PageIndex',
  components: {
    'auto-complete' : AutoComplete,
    'card': Card,
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
    }
  }
}
</script>
