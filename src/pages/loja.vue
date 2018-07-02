<template>
  <q-page class="view-parallax">
      <div>
        <parallax :fixed="true">
          <img src="statics/fachada.jpeg"
            alt="very cool bg" style="height:250px; margin-top:3rem;">
        </parallax>
      </div>
      <section class="info-loja padding column">
          <div class="titulo row justify-center">
             <h1> Nome Loja </h1>
          </div>
          <div class="sobre q-pa-sm">
            <p>
              A loja tal foi fundada em 1990 tendo desde então crediblidade
              e uma historia cheia de clientes satisfeitos.
              venha nos visitar ;)
            </p>

            <section class="contatos">
                <q-list inset-separator style="border:0px;">
              <q-item style="margin-bottom:1rem;">
                <q-item-side icon="fas fa-map" color="amber" />
                <q-item-main label="Rua tal de tal numero tal de tal" />
              </q-item>
              <q-item style="margin-bottom:1rem;">
                <q-item-side icon="fas fa-phone" color="red" />
                <q-item-main label="(18) 3643-198l" />
              </q-item>
              <q-item style="margin-bottom:1rem;">
                <q-item-side icon="fab fa-whatsapp" color="secondary" />
                <q-item-main label="(18) 3643-198l" />
              </q-item>
            </q-list>
            </section>
          </div>
          <section class="ultimos-produtos row justify-center" id="or">
            <div class="ultimo-adicionado shadow-1 row justify-center">
              <p class="self-center"> Ultimos adicionados </p>
            </div>
            <Galeria></Galeria>
          </section>
      </section>
</q-page>
</template>
<script>
  import Parallax from 'vue-parallaxy'
  import Galeria from '../components/loja/Galeria';
  export default {
    components: {
      Parallax,
      Galeria
    }
  }
</script>

<style scoped>
  .info-loja {
    background-color: #fff; 
    min-height:100%;
    z-index: 9999;
    position:absolute;
    top:42%;
    width:100%;
  }
  .titulo h1 {
    font-size:1.5rem;
    font-weight: 400;
  }
  .sobre{
    text-align: center;
    color: #828080;
  }
  .ultimo-adicionado{
    width: 180px;
    border-radius: 10px;
    height: 40px;
    margin:1rem;
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