<template>
  <section class="login">

    <div class="email" style="margin-top:3rem;">
      <q-input v-model="email" type="email" float-label="Email" />
    </div>

    <div class="password" style="margin-top:2rem;">
      <q-input v-model="password" type="password" float-label="Senha" />
    </div>

    <q-btn :loading="load" color="primary" class="full-width"
        style="margin-top:2rem"
        @click="login()" label="Login" />

  </section>
</template>

<script>
import Storage from '../../services/localStorage';

export default {
   name: 'ComponentLogin',
  data () {
    return {
      load: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      }
      this.$axios.post(`${this.$pathUser()}login`, data)
      .then(dados => dados.data)
      .then(dados => Storage.setStorageUser(
            dados.access_token, dados.refresh_token))
      .then(redireciona => this.$router.push('/usuario'))
    }
  }
}
</script>

<style>
</style>
