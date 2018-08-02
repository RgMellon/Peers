<template>
  <q-btn  color="primary"
            class="full-width fixed-bottom absolute-bottom"
            @click="sair()" label="Sair" />
</template>

<script>
import sessionStorage from '../../services/sessionStorage';
import localStorage from '../../services/localStorage';

export default {
  name: 'BotaoSair',
  data () {
    return {}
  },
  methods: {
    sair() {
      this.$router.push('/');
      localStorage.removeStorage('usuarios')
      sessionStorage.clear();
    }
  }
}
</script>

<style>
</style>
