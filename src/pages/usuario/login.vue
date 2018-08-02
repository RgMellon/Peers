<template>
  <q-page padding>
    <header-cadastro-login/>
    <h1 class="text-center" style="font-size:1.4rem;"> Login </h1>
    <login/>
   <p class="text-center" style="margin-top:2rem">  Ou </p>
    <div class="text-center">
      <router-link style="color:black; font-size:1.1rem;"
        :to="{ name: 'cadastro',}"> Cadastrar </router-link>
    </div>
  </q-page>
</template>

<script>
import HeaderLoginCadastro from '../../components/HeaderLoginCadastro'
import Login from '../../components/autenticacao/Login'

export default {
  name: 'PageLogin',
  components: {
    'header-cadastro-login': HeaderLoginCadastro,
    'login': Login
  }
}
</script>

<style>
</style>
