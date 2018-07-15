<template>
  <section>
    <q-input v-model="user" 
      float-label="Nome" placeholder="Digite o nome de usuario" />
    
    <div class="email">
      <q-input v-model="email" type="email" float-label="Email" />
    </div>
    
    <div class="password">
      <q-input v-model="senha" type="password" float-label="Senha" />
    </div>

    <div class="password">
      <q-input v-model="senhaConfirmada" type="password" float-label="Confirmar Senha" />
    </div>

     <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
      @click="cadastra()" label="Cadastrar" />
  </section>

 
</template>

<script>
export default {
  name: 'ComponentCadastro',
  data () {
    return {
      user: '',
      senha: '',
      senhaConfirmada: '',
      email: '',
      load: false,
    }
  },
  methods: {
    cadastra() {
      this.load = true;
      console.log('oi');
    }
  }
}
</script>

<style scoped>
  .password, .email {
    margin-top:1rem;
  }
</style>
