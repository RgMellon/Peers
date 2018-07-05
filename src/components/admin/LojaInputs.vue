<template>
   <section class="editar-loja" style="margin-top:2rem;">
    <q-field class="margin-1rem">
      <q-input v-model="nomeLoja" placeholder="Nome da loja"/>
    </q-field>
    <div style="margin-top:3rem;">
      <div style="color:red;">
        <q-input v-model="sobre" type="textarea" placeholder="Conte um pouco sobre sua loja"/>
      </div>
    </div>
    <q-field
      icon="fas fa-map" style="margin-top:2rem;"
      icon-color="amber"
      label="Endereço" >
      <q-input v-model="endereco" type="email"/>
    </q-field>
    <q-field
      icon="fas fa-phone" style="margin-top:2rem;"
      icon-color="red"
      label="Tel" >
      <q-input v-model="tel" type="email"/>
    </q-field>
    <q-field
      icon="fab fa-whatsapp" style="margin-top:2rem;"
      icon-color="secondary"
      label="Whatsapp" >
      <q-input v-model="wp" type="email"/>
    </q-field>
    <q-btn :loading="loading1" color="primary" class="full-width" style="margin-top:2rem"
      @click="simulateProgress(1)" label="Salvar configurações" />
  </section>
</template>

<script>
export default {
  name: 'ComponentLojaCampos',
  data () {
    return {
      nomeLoja:'',
      sobre: '',
      wp: '',
      tel: '',
      endereco: '',
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

<style scoped>
.margin-1rem {
  margin-top:1rem;
}
</style>
