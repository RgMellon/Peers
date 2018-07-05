<template>
  <q-page>
    <parallax img="fachada.jpeg">
      <section slot="conteudo">
        <section class="info-loja padding column">
          <section class="titulo row justify-center">
            <h1> Nome Loja </h1>
          </section>
          <section class="descricao q-pa-sm">
            <p>
              A loja tal foi fundada em 1990 tendo desde então crediblidade
              e uma historia cheia de clientes satisfeitos.
              venha nos visitar ;)
            </p>
          </section>
          <section class="contatos">
            <contatos></contatos>
          </section>
          <section class="galeria">
            <div id="or" class="row justify-center">
              <div class="ultimo-adicionado row justify-center shadow-1">
                <p class="self-center" style="color:#828080"> Galeria Produtos </p>
              </div>
            </div>
            <Galeria style="margin-top:1rem;"></Galeria>
          </section>
        </section>
      </section>
    </parallax>
  </q-page>
</template>
<script>
  import Parallax from '../components/Parallax';
  import Galeria from '../components/loja/Galeria';
  import LojaContatos from '../components/loja/LojaContatos';
  export default {
    components: {
      'parallax' : Parallax,
      Galeria,
      'contatos' : LojaContatos
    }
  }
</script>

<style scoped>
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
  p{
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