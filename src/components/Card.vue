<template>
  <div class="img row justify-center">
    <div class="area-img row justify-center">
      <img src="statics/bota.jpg" class="img-detalhe shadow-up" style="width:150px" height="150px">
    </div>
    <section class="info-produto">

    </section>
  </div>
</template>

<script>
export default {
  props: ['nome', 'preco', 'desc', 'img', 'nomeEmpresa', 'descEmpresa'],
  name: 'CardItens',
  data () {
    return {}
  }
}
</script>

<style scoped>

  .img-detalhe {
    width: 250px;
    position: relative;
    top: 19px;
    border-radius: 44px;
    display: flex;
    justify-content: center;
  }
  .area-img{
    background:#E8D23E;
    width:100%;
    height: 130px;
  }
</style>
