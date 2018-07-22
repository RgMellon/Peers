<template>
  <q-page padding >
   <header-cadastro-login/>
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
import HeaderLoginCadastro from '../../components/HeaderLoginCadastro'
export default {
  name: 'PageCadastro',
  components: {
    'form-cadastro': Cadastro,
    'header-cadastro-login': HeaderLoginCadastro
  }
}
</script>

<style scroped>


  .form-cadastro{
    margin-top: 2rem;

  }
  .cadastro h1 {
    font-size: 1.4rem;
  }
</style>
