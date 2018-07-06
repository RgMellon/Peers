<template>
  <section class="inputs-produtos">
    <q-field style="margin-top:2rem;" label="Nome Produto" >
      <q-input v-model="nome" type="text"/>
    </q-field>
    <q-field
      icon="fas fa-dollar-sign" style="margin-top:2rem;"
      icon-color="green"
      label="Preço" >
      <q-input v-model="preco" type="tel"/>
    </q-field>
    <div style="margin-top:3rem;">
      <div style="color:red;">
        <q-input v-model="desc" type="textarea" placeholder="Descriçao do produto"/>
      </div>
    </div>
    <q-field>
      <q-chips-input style="margin-top:2rem;"
        v-model="tags"
        placeholder="Adicione suas Tags :)"
      />
    </q-field>
    <q-btn :loading="loading1" color="primary" class="full-width" style="margin-top:2rem"
      @click="simulateProgress(1)" label="Salvar Produto" />
  </section>
</template>

<script>
export default {
  name: 'InputProduto',
  data () {
    return {
      tags: [],
      preco: '',
      nome: '',
      desc: '',
      loading1: false,
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)

    }
  }

}
</script>

<style>
</style>
