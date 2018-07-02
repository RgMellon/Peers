<template>
  <section class="detalhe row justify-center">
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
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Ut dapibus convallis lorem nec aliquet.
          Curabitur vitae purus
        </p>
      </div>
      <section class="detalhe">
        <ul>
          <li> Marrom </li>
          <li> Coro </li>
          <li> 100% legal</li>
        </ul>
      </section>
    </section>
    <section class="info-loja" style="margin-top:2rem; width:90%">
      <div class="row justify-center sub-menu">
      </div>
      <modal></modal>
    </section>
    </section>
</template>


<script>
import Modal from '../components/Modal';
export default {
  name: 'PaginaDetalheCalcado',
  components: {
    modal: Modal,
  },
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
  .descricao-produto p {
    text-align: left;
  }
  .preco-produto {
    font-size: 1.3rem;
    color: #514e4e;
  }
  .sub-menu {
    color: #9E9E9E;
    font-size: 1.2rem;
  }
</style>
