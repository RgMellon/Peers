<template>
  <q-page padding class="docs-input row justify-center">
      <div style="width: 500px; max-width: 90vw;">
          <auto-complete @selecionou="mostraResultado" style="margin-top:2rem"></auto-complete>
          <lista-itens v-if="this.mostra" style="margin-top:2rem"></lista-itens>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
import AutoComplete from '../components/AutoComplete';
import ListaItens from '../components/ListaItens';
export default {
  name: 'PageIndex',
  components: {
    'auto-complete' : AutoComplete,
    'lista-itens': ListaItens,
  },
  data () {
    return {
      mostra: false,
    }
  },
  methods: {
    mostraResultado(){
      this.mostra = true;
    }
  }
}
</script>
