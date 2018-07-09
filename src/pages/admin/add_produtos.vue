<template>
  <q-page>
    <cropper @imgCortada="mostraImg" style="padding-top:3.1rem;"> </cropper>
    <div style="margin:0.5rem;">
      <input-produtos :imgCropp="this.imgCropp"> </input-produtos>
    </div>
  </q-page>
</template>

<script>
  import Cropper from '../../components/Cropper';
  import ProdutoInputs from  '../../components/admin/ProdutoInputs';
  export default {
    components:{
      'cropper': Cropper,
      'input-produtos': ProdutoInputs
    },
    data() {
      return {
        imgCropp: '',
      }
    },
    methods: {
      mostraImg(img) {
        this.imgCropp = img;
      }
    }
  }
</script>
