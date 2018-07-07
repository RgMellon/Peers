<template>
   <section class="editar-loja" style="margin-top:2rem;">
    <q-field class="margin-1rem">
      <q-input v-model="nome" placeholder="Nome da loja"/>
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
      label="Tel">
      <q-input type="tel" v-model="tel"/>
    </q-field>
    <q-field
      icon="fab fa-whatsapp" style="margin-top:2rem;"
      icon-color="secondary"
      label="Whatsapp" >
      <q-input v-model="wp" type="tel"/>
    </q-field>
    <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
      @click="salvaDados()" label="Salvar configurações" />
  </section>
</template>

<script>
export default {
  name: 'ComponentLojaCampos',
  data () {
    return {
      nome: '',
      sobre: '',
      wp: '',
      tel: '',
      endereco: '',
      bairro: '',
      load: false,
    }
  },
  methods: {
    salvaDados() {
      this.load = true;
      this.$storeLoja()
    }
  }
}
</script>

<style scoped>
.margin-1rem {
  margin-top:1rem;
}
</style>
