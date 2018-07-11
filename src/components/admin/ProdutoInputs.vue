<template>
  <section class="inputs-produtos">

    <q-field style="margin-top:2rem;" label="Nome Produto" >
      <q-input v-model="nome" type="text"/>
    </q-field>

    <q-field
      icon="fas fa-dollar-sign" style="margin-top:2rem;"
      icon-color="green"
      label="Preço" >
      <q-input v-model="preco" type="tel"/>
    </q-field>

    <div style="margin-top:3rem;">
      <div style="color:red;">
        <q-input v-model="descricao" type="textarea" placeholder="Descriçao do produto"/>
      </div>
    </div>

    <q-field>
      <q-chips-input style="margin-top:2rem;"
        v-model="tags"
        placeholder="Adicione suas Tags :)"
      />
    </q-field>

    <q-btn :loading="load" color="primary" class="full-width" style="margin-top:2rem"
      @click="salvaProdutos()" label="Salvar Produto" />

  </section>
</template>

<script>
import Upload from '../../components/Upload';
export default {
  props: ['imgCropp'],
  name: 'InputProduto',
  components: {
    'upload': Upload,
  },
  data () {
    return {
      tags: [],
      preco: '',
      nome: '',
      descricao: '',
      load: false,
    }
  },
  methods: {
    salvaProdutos () {
      this.load = true;
      this.$salvaProduto(this.imgCropp, this.nome, this.preco, this.descricao, this.tags)
        .then(res => this.load = false)
    },
  }

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
