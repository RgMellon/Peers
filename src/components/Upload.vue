<template>
  <div class="">
    <div :style="myIcon" class="cor-icone">
      <label for="file-input" class="flex">
        <q-icon  :name="icon"/>
      </label>
      <input id="file-input" type="file" accept="image/*" @change="onFileChange"/>
    </div>
  </div>
</template>

<script>
export default {
  props:['size', 'icon'],
  name: 'UploadName',
  data () {
    return {
      imagem: '',
      escondeImg: '',
    }
  },
  computed: {
    myIcon(){
      return `font-size:${this.size}px`;
    }
  },
  methods: {
      devolveImg(boolean) {
        this.escondeImg = boolean;
      },
      onFileChange(e) {
        this.$createImg(e)
          .then(res => {
            this.imagem = res;
            this.$emit('addFile', this.imagem)
              if(this.escondeImg == false){
                this.imagem = false
              }
            }
          );
      },
      removeImage(e) {
        this.imagem = '';
        this.$emit('addFile', null);
      },

    }
}
</script>

<style scoped>
  #file-input{
    display: none;
  }
 
  .cor-icone {
    color: #d3c6c6c4;
  }
</style>
