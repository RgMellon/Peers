<template>
  <section>
    <q-input v-model="name"
      float-label="Nome" placeholder="Digite o nome de usuario" />

    <div class="email">
      <q-input v-model="email" type="email" float-label="Email" />
    </div>

    <div class="password">
      <q-input v-model="password" type="password" float-label="Senha" />
    </div>

    <div class="password">
      <q-input v-model="senhaConfirmada" type="password" float-label="Confirmar Senha" />
    </div>

     <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
      @click="cadastra()" label="Cadastrar" />
  </section>


</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ComponentCadastro',
  data () {
    return {
      name: '',
      password: '',
      senhaConfirmada: '',
      email: '',
      load: false,
    }
  },
  methods: {
    ...mapActions({
      setUsuario: 'setUsuario',
    }),
    cadastra() {
      this.load = true;
      const data = {
        name: this.name,
        password: this.password,
        email: this.email,
        password_confirmation: this.senhaConfirmada
      }
      this.$axios.post('https://mypeers-api.herokuapp.com/api/register', data, {
         headers: {
          'Accept': 'application/json',
        }
      })
        .then(res => res.data)
        .then(dados => {
          localStorage.setItem('usuarios',
            JSON.stringify({ "token" : dados.access_token,
                            "refresh_token":dados.refresh_token})
          )
        })
        .then(redireciona => this.$router.push('/autenticacao'))
        .catch(err => console.error(err.message));
    }
  }
}
</script>

<style scoped>
  .password, .email {
    margin-top:1rem;
  }
</style>
