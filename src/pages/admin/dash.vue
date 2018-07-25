<template>
  <q-page>
    <upload @imgCortada="uploadFile" icon="fas fa-camera"
      size="80" class="btn-upload">
    </upload>
    <parallax :img="this.file">
      <section slot="conteudo">
        <div v-if="this.loja.data">
          <loja-update :nomeLoja="this.loja.data.nome"
            :sobreLoja="this.loja.data.sobre"
            :enderecoLoja="this.loja.data.endereco"
            :telLoja = "this.loja.data.tell"
            :wpLoja = "this.loja.data.wp"
            :bairroLoja = "this.loja.data.bairro"
            :numeroLoja = "this.loja.data.numero"
            :img="this.file"
          />
        </div>
        <div v-if="!this.loja.data">
          <loja-create :img="this.file"
            :userId="this.user_id">
          </loja-create>
        </div>
      </section>
    </parallax>
  </q-page>
</template>

<script>

import { getLoja } from '../../services/getLoja';
import { retornaTokenLocal } from '../../services/retornaTokenLocal';
import sessionStorage from '../../services/sessionStorage';
import Parallax from '../../components/Parallax';
import LojaCreate from '../../components/admin/LojaCreate';
import Upload from '../../components/Upload';
import LojaUpdate from '../../components/admin/LojaUpdate';


export default {
  name: 'PageDashBoard',

  components: {
    'parallax' : Parallax,
    'loja-create': LojaCreate,
    'upload': Upload,
    'loja-update': LojaUpdate
  },

  data () {
    return {
      file: '',
      user_id: '',
      loja : {},
    }
  },

  mounted() {
    if(sessionStorage.get('user')) {
      let user = sessionStorage.get('user');
      this.user_id = user.id;
      this.getLojaByUser(user.id)
      return;
    }

    this.$axios.get(`${this.$pathUser()}user`, {
      headers : {
        Authorization : `Bearer ${retornaTokenLocal()}`
      }
    })
      .then(session => sessionStorage.set('user', session.data))
      .then(user => {
        let idUser = sessionStorage.get('user').id
        this.user_id = idUser;
        this.getLojaByUser(idUser)
      })
    },

  methods: {
    uploadFile(img){
      this.file = img;
    },

    getLojaByUser(id) {
      if(sessionStorage.get('loja')){
        this.getFileCache();
        return;
      }
      // se não tiver em cache, pega aqui
      getLoja(id)
      .then(res => this.loja = res)
      .then(loja => loja.data ? this.attFile(loja.data.img) : null)
      .then(session => sessionStorage.set('loja', this.loja.data));
    },

    getFileCache() {
      let loja = this.loja.data = sessionStorage.get('loja');
      this.attFile(loja.img)
    },

    attFile(img){
      this.file = `${this.$pathImgLoja()}${img}`
    }
  },
}
</script>

<style scoped>
  .btn-upload {
    background: #f8f6f900;
    position: fixed;
    top: 105px;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    color:red;
  }
</style>
