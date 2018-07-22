<template>
  <div>
     <button @click="teste()"> TESTE</button>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods: {
    teste() {
      window.location.href = 'http://localhost:8000/login';
      this.$axios.get('http://localhost:8000/login');
    //  this.$axios.get('http://localhost:8000/oauth/authorize', {
    //   params: {
    //     client_id: '8',
    //     redirect_uri: 'http://localhost:8080/callback',
    //     response_type: 'code',
    //     scope: '',
    //   }}).then(res => console.log(res))
    //     .catch(err => err.response.status)

    }
  }
}
</script>

<style>
</style>
