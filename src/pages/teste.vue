<template>
  <q-page padding class="text-center">

  </q-page>
</template>

<script>


export default {
  name: 'PaginaDetalheCalcado',
  components: {


  },
  mounted() {
   let query = this.$route.query;
   const data = {
     'client_id': '8',
      'client_secret': 'gpTY2RnH8Or166uyDh6aAdRv2WSTpu1VJXYZErK5',
      'redirect_uri': 'http://localhost:8080/callback',
      'code': query.code,
      'grant_type': 'authorization_code'
   }
   this.$axios.post('http://localhost:8000/oauth/token', data)
   .then(res => console.log(res))
   .catch(err => console.log(err));
  },
}
</script>

<style scoped>

  .content-parallax {
    background-color: #fff;
    width:100%;
    padding: 0.5rem;
  }
  .preco{
    font-size: 1.2rem;
    color: gray;
  }
  .img-parallax {
    width: 100%;
    margin-top:3rem;
  }

  .descricao{
  }
  .titulo h1{
    font-size: 1.5rem;
    color:#027be3;
  }
  .info-loja {

  }
</style>
