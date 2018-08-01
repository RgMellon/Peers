<template>

    <div  class="box" @click="add">
      <img :src="`${this.$pathImg()}${this.calcado.img}`" class="max-100">
    </div>

</template>

<script>
import Produto from '../../services/Produto';
import { mapActions } from 'vuex';

export default {
  props: ['calcado'],
  name: 'Galeria',

  data () {
    return {
      dados : {},
    }
  },

  methods: {
    add() {
      this.detalheProduto(this.calcado)
      this.$router.push('/calcado/detalhes')
    },
    ...mapActions({
      detalheProduto: 'detalheProduto',
    }),
  },

}
</script>

<style scoped>
.box {
  width: 40%;
  margin: 3%;
  border:1px solid #dedbdbc4;
  border-radius: 10px;
}
.max-100{
  max-width:100%;
  border-radius: 5px;
  padding: 0.3rem;
  margin-top: 4px;
}
</style>
