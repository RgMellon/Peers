<template>
  <section style="padding-top:5rem; padding: 0.5rem;">
    <q-field class="margin-1rem">
      <q-input v-model="loja.nome" />
    </q-field>

    <div style="margin-top:3rem;">
      <q-input v-model="loja.sobre" type="textarea" />
    </div>

    <q-field
      icon="fas fa-map" style="margin-top:2rem;"
      icon-color="amber"
      label="Endereço" >
      <q-input v-model="loja.endereco" type="text"/>
    </q-field>

    <q-field label="Numero" style="margin-top:2rem;">
         <q-input v-model="loja.numero" type="text"/>
     </q-field>

    <q-field label="Bairro" style="margin-top:2rem;">
         <q-input v-model="loja.bairro" type="text"/>
     </q-field>

    <q-field
      icon="fas fa-phone" style="margin-top:2rem;"
      icon-color="red"
      label="Tel">
      <q-input type="tel" v-model="loja.tel"/>
    </q-field>

    <q-field
      icon="fab fa-whatsapp" style="margin-top:2rem;"
      icon-color="secondary"
      label="Whatsapp" >
      <q-input v-model="loja.wp" type="tel"/>
    </q-field>

    <q-btn :loading="load" color="primary" class="full-width"
          style="margin-top:2rem" @click="update()" label="Atualizar" />

  </section>
</template>

<script>

import Loja from '../../services/Loja';
import sessionStorage from '../../services/sessionStorage';

export default {
  props: ['imgUpload'],
  name: 'LojaUpdate',

  data () {
    return {
      loja: {
        nome: '',
        sobre: '',
        numero: '',
        bairro: '',
        endereco: '',
        tel: '',
        wp: '',
        id: '',
      },
      load: false,
    }
  },

  methods: {
    update() {
      this.load = true;
      this.loja.img = this.imgUpload;
      Loja.update(this.loja)
        .then(res => this.load = false)
        .then(message => this.$q.notify({
          message: 'Loja atualizada',
          color: 'positive',
          icon: 'fas fa-thumbs-up',
        }))
    },

    lojaDoCache() {
      let loja = sessionStorage.get('loja').data;
      // atualiza o data utilizando o cache
      this.loja.nome = loja.nome
      this.loja.sobre = loja.sobre
      this.loja.numero = loja.numero
      this.loja.endereco = loja.endereco
      this.loja.bairro = loja.bairro
      this.loja.tel = loja.tell
      this.loja.wp = loja.wp
      this.loja.id = loja.id;
    }
  },

  mounted() {
    // nesse ponto é pego os dados do cache
    // para mostrar nos campos
    this.lojaDoCache();
  },

}
</script>

<style>
</style>
