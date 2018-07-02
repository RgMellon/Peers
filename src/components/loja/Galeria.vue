<template>
  <section class="container margin-right:1rem">
    <div class="box" v-for="i of 100" @click="redirecionarPara">
      <img src="statics/allstar.jpg" class="max-100" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Galeria',
  data () {
    return {}
  },
  methods: {
    redirecionarPara(){
      this.$redirecionaComLoad('calcado/detalhes')
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 7px;
  }
.box {
  width: 31%;
  margin: 1%;
  border:1px solid #dedbdbc4;
  border-radius: 10px;
}
.max-100{
  max-width:100%;
}
</style>
