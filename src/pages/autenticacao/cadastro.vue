<template>
  <q-page padding >
    <section class="logo text-center" >
      <img src="statics/icons/icon-256x256.png" 
           alt="logo" style="width:150px; border-radius:50%;" class="shadow-4">
    </section>
    <section class="frase text-center">
      <p> Junte se à myPeers </p>
    </section>
    <section class="cadastro text-center">
      <h1> Cadastro </h1>
    </section>
    <section class="form-cadastro" style="color:amber">
      <form-cadastro></form-cadastro>
    </section>
  </q-page>
</template>

<script>
import Cadastro from '../../components/autenticacao/Cadastro'
export default {
  name: 'PageCadastro',
  components: {
    'form-cadastro': Cadastro
  }
}
</script>

<style scroped>
  .logo {}
  .frase{
    margin-top:1rem;
    font-size:1.2rem;

  }
  .form-cadastro{
    margin-top: 2rem;
    
  }
  .cadastro h1 {
    font-size: 1.4rem;
  }
</style>
