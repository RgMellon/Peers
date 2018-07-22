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
import { retornaTokenLocal } from '../../services/retornaTokenLocal';
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
    this.$axios.get(`${this.$pathUser()}user`, {
      headers : {
        Authorization : `Bearer ${retornaTokenLocal()}`
      }
    }).then(user => this.user_id = user.data.id)
      .then(idUser => this.getLojaByUser(idUser))
  },

  methods: {
    uploadFile(img){
      this.file = img;
    },

    getLojaByUser(id) {
      this.$axios.get(`${this.$pathUser()}v1/loja/user/${id}`)
      .then(res => this.loja = res)
      .then(loja => {
        if(loja.data) {
          this.file = `${this.$pathImgLoja()}${loja.data.img}`
        }
      })
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
