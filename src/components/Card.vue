<template>
  <div class="img row justify-center">
    <div class="area-img row justify-center">
      <img src="statics/bota.jpg" class="img-detalhe shadow-up" style="width:150px" height="150px">
    </div>
    <section class="info-produto">
        <div class="titulo row justify-center">
          <h1> Lorem Ipsum</h1>
        </div>
        <div class="preco-produto row justify-center">
          <p> R$ 550.00 </p>
        </div>
        <div class="descricao-produto q-pa-sm row">
          <p style="text-align:left;">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Ut dapibus convallis lorem nec aliquet.
            Curabitur vitae purus</p>
        </div>
        <div class="info">
            <ul>
              <li> Marrom </li>
              <li> Coro </li>
              <li> 100% legal</li>
            </ul>
        </div>
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
    top: 30px;
    border-radius: 44px;
    display: flex;
    justify-content: center;
  }
  .area-img{
    background:#E8D23E;
    width:100%;
    height: 110px;
  }
  .info-produto{
    margin-top: 6rem;
  }
  .titulo h1{
    font-size: 1.8rem;
    color: #9E9E9E;
  }
  .descricao-produto{
    margin-left: 4%;
  }
  .preco-produto {
    font-size: 1.3rem;
    color: #514e4e;
  }
</style>
