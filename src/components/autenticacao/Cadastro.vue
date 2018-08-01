<template>
  <section>
    <q-input v-model="form.name"
      float-label="Nome"
      @blur="$v.form.name.$touch"
      :error="$v.form.name.$error"
      placeholder="Digite o nome de usuario" />

    <div class="email">
      <q-input v-model="form.email" type="email"
      @blur="$v.form.email.$touch"
        :error="$v.form.email.$error"
      float-label="Email" />
    </div>

    <div class="password">
      <q-input v-model="form.password"
      @blur="$v.form.password.$touch"
        :error="$v.form.password.$error"
      type="password" float-label="Senha" />
    </div>

    <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
      @click="cadastra()" label="Cadastrar" />

  </section>


</template>

<script>
import User from '../../services/User';
import Vuelidate from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import Vue from 'vue';

Vue.use(Vuelidate);

export default {
  name: 'ComponentCadastro',
  data () {
    return {
      form: {
        name: '',
        password: '',
        email: '',
      },
      load: false,
    }
  },
  methods: {
    cadastra() {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Preencha os campos corretamente ')
        return
      }

      this.load = true;
      User.register(this.form)
        .then(redireciona => this.$router.push('/usuario'))
    }
  },

  validations: {
    form: {
      email: { required, email  },
      password : { required },
      name: { required }
    }
  },
}
</script>

<style scoped>
  .password, .email {
    margin-top:1rem;
  }
</style>
