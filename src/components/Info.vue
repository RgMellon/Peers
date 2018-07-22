<template>
  <q-alert v-if="!this.verificaSeUsuarioLogado()" icon="fas fa-user" class="info" color="info">
    Dica: Crie um perfil para uma melhor experiência ;)
    <router-link style="color:white;" :to="{ name: 'cadastro',}"> Criar </router-link>
  </q-alert>
</template>

<script>
export default {
  name: 'InfoCadastro',
  data () {
    return {}
  },
  methods: {
    verificaSeUsuarioLogado(){
      return localStorage.getItem('usuarios');
    },
  }
}
</script>

<style>
</style>
