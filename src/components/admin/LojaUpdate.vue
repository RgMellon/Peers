<template>
  <section style="padding: 0.5rem;">

      <div class="img-upload">
        <div v-if="!this.file" class="img-loja" style="padding-top:1rem;">
          <img :src="`${this.$pathImgLoja()}${this.loja.img}`">
        </div>
        <div v-if="this.file">
          <img :src="this.file">
        </div>
      </div>

      <div class="btn-upload row justify-end">
        <div class="wrapper-btn">
          <upload @imgCortada="uploadFile" icon="fas fa-camera"
              size="30" class="btn-upload">
          </upload>
        </div>
      </div>

      <q-field class="margin-1rem">
        <q-input v-model="loja.nome"/>
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
        <q-input type="tel" v-model="loja.tell"/>
      </q-field>

      <q-field
        icon="fab fa-whatsapp" style="margin-top:2rem;"
        icon-color="secondary"
        label="Whatsapp" >
        <q-input v-model="loja.wp" type="tel"/>
      </q-field>

      <q-btn color="primary" class="full-width" style="margin-top:2rem"
        @click="update()" label="Atualizar" />

      </section>
  </template>
<script>

import Loja from '../../services/Loja';
import User from '../../services/User';
import Upload from '../../components/Upload';

export default {
  name: 'LojaUpdate',

  components: {
    'upload' :Upload
  },

  data () {
    return {
      loja: {},
      file: '',
    }
  },
  mounted() {
    User.getUser()
      .then(user => user.id)
      .then(userId => Loja.getLojaByUser(userId))
      .then(loja => this.loja = loja.data);
  },
  methods: {
    uploadFile(img){
      this.file = img;
    },
  }
}
</script>

<style>
.img-upload {
  padding-top: 3rem;
}

.wrapper-btn {
  background: #9e9e9e;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: -30px;
}
img {
  max-width: 100%;
  width: 100%;
}

</style>
