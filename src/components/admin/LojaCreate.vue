<template>
  <section style="margin-top:2rem; padding: 0.5rem;">
    <q-field class="margin-1rem">
      <q-input v-model="form.nome"
        @blur="$v.form.nome.$touch"
        :error="$v.form.nome.$error"
        placeholder="Nome da loja"/>
    </q-field>

    <div style="margin-top:3rem;">
      <q-input v-model="form.sobre" type="textarea" placeholder="Sobre a loja"/>
    </div>

    <q-field
      icon="fas fa-map" style="margin-top:2rem;"
      icon-color="amber"
      label="Endereço" >
      <q-input v-model="form.endereco"
        @blur="$v.form.endereco.$touch"
        :error="$v.form.endereco.$error"
      type="text"/>
    </q-field>

    <q-field label="Numero" style="margin-top:2rem;">
         <q-input v-model="form.numero"
         @blur="$v.form.numero.$touch"
          :error="$v.form.numero.$error"
          type="number"/>
     </q-field>

    <q-field label="Bairro" style="margin-top:2rem;">
         <q-input v-model="form.bairro"
         @blur="$v.form.bairro.$touch"
          :error="$v.form.bairro.$error"
         type="text"/>
     </q-field>

    <q-field
      icon="fas fa-phone" style="margin-top:2rem;"
      icon-color="purple"
      label="Tel">
      <q-input type="tel" v-mask="'(##)####-####'"
      v-model="form.tell"/>
    </q-field>

    <q-field
      icon="fab fa-whatsapp" style="margin-top:2rem;"
      icon-color="secondary"
      label="Whatsapp / Cel" >
      <q-input v-model="form.wp"
       v-mask="'(##)#####-####'"
      type="tel"/>
    </q-field>
    <q-btn  color="primary" class="full-width" style="margin-top:2rem"
      @click="store()" label="Salvar configurações" />

  </section>
</template>

<script>
import Loja from '../../services/Loja';
import User from '../../services/User';

import Vuelidate from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import Vue from 'vue';


Vue.use(Vuelidate);


export default {
  props: ['img'],
  name: 'CreateLoja',
  data () {
    return {
      form: {
        nome: '',
        sobre:  '',
        endereco: '',
        numero: '',
        bairro: '',
        tell: '',
        wp: '',
      }
    }
  },

  methods : {
    store() {
      if(this.existsImg()) return;

      this.$v.form.$touch()
        if (this.$v.form.$error) {
          this.$q.notify('Preencha os campos corretamente ')
          return
        }

        User.getUser()
        .then(user => user.id)
        .then(id => {
          this.form.img = this.img;
          this.form.id = id;
          Loja.store(this.form);
        });
    },

    existsImg() {
      if(this.img == '') {
        this.$q.notify('Você deve escolher uma imagem')
          return true;
      }
    }
  },
  validations: {
    form: {
      nome: { required },
      endereco: { required },
      numero: { required },
      bairro : { required },
    }
  },
}
</script>

<style>
</style>
