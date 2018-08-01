<template>
  <section class="login">

    <div class="email" style="margin-top:3rem;">
      <q-input v-model="form.email"
       @blur="$v.form.email.$touch"
        :error="$v.form.email.$error"
      type="email" float-label="Email" />
    </div>

    <div class="password" style="margin-top:2rem;">
      <q-input v-model="form.password" type="password"
      @blur="$v.form.password.$touch"
      :error="$v.form.email.$error"
      float-label="Senha" />
    </div>

    <q-btn :loading="load" color="primary" class="full-width"
        style="margin-top:2rem"
        @click="login()" label="Login" />

  </section>
</template>

<script>
import User from '../../services/User';
import { required, email } from 'vuelidate/lib/validators';

import Vuelidate from 'vuelidate'
import Vue from 'vue';

Vue.use(Vuelidate);

export default {
  name: 'ComponentLogin',
  data () {
    return {
      load: false,
      form: {
        email: '',
        password: ''
      },

    }
  },
  methods: {
    login() {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Preencha os campos corretamente ')
        return
      }

      User.login(this.form)
        .then(res => res)
        .then(redireciona => this.$router.push('/usuario'))
        .catch(err => this.$q.notify('Usuário ou senha inválidos'));
    },


  },
  validations: {
    form: {
      email: { required, email  },
      password : { required }
    }
  },
}
</script>

<style>
</style>
