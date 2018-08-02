<template>
  <q-page>
    <parallax :img="`${ this.$pathImgLoja() }/${ loja.img }`">
      <section slot="conteudo" >
        <section class="info-loja padding column">
          <section class="titulo row justify-center">
            <h1> {{ loja.nome }} </h1>
          </section>
          <section class="descricao q-pa-sm">
            <p style="word-wrap: break-word;">
              {{ loja.sobre }}
            </p>
          </section>
          <section class="contatos" style="margin-top:2rem">
            <contatos :endereco="loja.endereco" :telefone="loja.tell" :wp="loja.wp" ></contatos>
          </section>

          <div class="galeria">
            <div id="or" class="row justify-center">
              <div class="ultimo-adicionado row justify-center shadow-1">
                <p class="self-center" style="color:#828080"> Galeria Produtos </p>
              </div>
            </div>
            <div class="container">
              <Galeria  v-for="i of this.dados" :key="i.id" :calcado="i">
              </Galeria>
            </div>
          </div>
        </section>
      </section>
    </parallax>
  </q-page>
</template>

<script>
  import Parallax from '../components/Parallax';
  import Galeria from '../components/loja/Galeria';
  import LojaContatos from '../components/loja/LojaContatos';
  import sessionStorage from '../services/sessionStorage';
  import Produto from '../services/Produto';

  export default {
    components: {
      'parallax' : Parallax,
      Galeria,
      'contatos' : LojaContatos
    },

    data () {
      return {
        loja : {},
        dados: {}
      }
    },

    mounted() {
      this.getLojaFromCache()
      this.getProdLoja()
    },

    methods: {

      getLojaFromCache() {
        this.loja = sessionStorage.get('loja_detalhe');
      },

      getProdLoja() {
        Produto.getProdutosByLoja()
        .then(res => this.dados = res.data);
      }
    }

  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .titulo h1 {
    font-size:1.5rem;
    font-weight: 400;
  }

  .descricao p {
    text-align: center;
    color: #828080;
  }

  .ultimo-adicionado{
    width: 190px;
    border-radius: 10px;
    height: 40px;
    margin:1rem;
    border:1rem;
  }

  p {
    margin:0px;
  }

  .margin-top-05{
    margin-top:1rem;
  }

  #or {
    position: relative;
  }

  #or::before,

  #or::after {
    position: absolute;
    width: 79px;
    height: 1px;
    top: 35px;
    background-color: #aaa;
    content: '';
  }

  #or::before {
    left: 0;
  }

  #or::after {
    right: 0;
  }

  .contatos {
    margin-top:1rem;
  }

</style>
