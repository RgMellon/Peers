<template>
  <section style="margin-top:2rem; padding: 0.5rem;">
    <q-field class="margin-1rem">
      <q-input v-model="loja.nome" placeholder="Nome da loja"/>
    </q-field>

    <div style="margin-top:3rem;">
      <q-input v-model="loja.sobre" type="textarea" placeholder="Sobre a loja"/>
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
      <q-input type="tel" v-model="loja.tell"/>
    </q-field>

    <q-field
      icon="fab fa-whatsapp" style="margin-top:2rem;"
      icon-color="secondary"
      label="Whatsapp" >
      <q-input v-model="loja.wp" type="tel"/>
    </q-field>

    <q-btn  color="primary" class="full-width" style="margin-top:2rem"
      @click="store()" label="Salvar configurações" />

  </section>
</template>

<script>
import Loja from '../../services/Loja';

export default {
  props: ['img', 'userId'],

  name: 'CreateLoja',

  data () {
    return {
      loja: {
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
       this.loja.img = this.img;
       this.loja.user_id = this.userId;
       Loja.store(this.loja)
        .then(res => this.$q.notify({
          icon: 'fas fas fa-thumbs-up',
          message: 'Loja Criada com sucesso '
        }));
    }
  }
}
</script>

<style>
</style>
