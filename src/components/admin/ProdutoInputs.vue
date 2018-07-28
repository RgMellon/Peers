<template>
  <section class="inputs-produtos">

    <q-field style="margin-top:2rem;" name="nome" label="Nome Produto" >
      <q-input
        v-model="form.nome"
        type="text"
        @blur="$v.form.nome.$touch"
        :error="$v.form.nome.$error"
      />
    </q-field>

    <q-field
      icon="fas fa-dollar-sign" style="margin-top:2rem;"
      icon-color="green"
      label="Preço" >
      <q-input
        v-model="form.preco"
        @blur="$v.form.preco.$touch"
        :error="$v.form.preco.$error"
        type="tel"/>
    </q-field>

    <div style="margin-top:3rem;">
      <div style="color:red;">
        <q-input v-model="form.descricao" type="textarea" placeholder="Descriçao do produto"/>
      </div>
    </div>

    <q-field>
      <q-chips-input style="margin-top:2rem;"
        v-model="form.tags"
        @blur="$v.form.tags.$touch"
        :error="$v.form.tags.$error"
        placeholder="Adicione suas Tags :)"
      />
    </q-field>

    <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
      @click="store()" label="Salvar Produto" />

  </section>
</template>

<script>
import Upload from '../../components/Upload';
import Produto from '../../services/Produto';
import { required } from 'vuelidate/lib/validators';

import Vuelidate from 'vuelidate'
import Vue from 'vue';

Vue.use(Vuelidate);

export default {
  props: ['imgCropp'],
  name: 'InputProduto',
  components: {
    'upload': Upload,
  },
  data () {
    return {
      form : {
        tags: [],
        preco: '',
        nome: '',
        descricao: '',
      },
      load: false,
    }
  },
  methods: {
    store () {
      this.validate();
      this.emptyImg();
      this.load = true;
      this.form.img = this.imgCropp;
      Produto.store(this.form)
      .then(res => this.load = false)
    },

    validate() {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Alguns campos estão incorretos :( ')
        return
      }
    },

    emptyImg(){
      if(this.imgCropp == ''){
        this.$q.notify(' Selecione e corte a imagem ')
        return
      }
    }

  },
  validations: {
    form: {
      nome: { required },
      preco : { required },
      tags: { required }
    }
  },

}
</script>

<style scoped>
  .btn-upload {
    background: #ffc107 ;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: -35px;
    right:7px;
  }
  @media screen and (min-height: 800px){
    .btn-upload {
      top: -95px;
    }
  }
</style>
