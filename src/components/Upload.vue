<template>
  <div class="">
    <div :style="sizeIcon" class="cor-icone">
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
    }
  },
  computed: {
    sizeIcon(){
      return `font-size:${this.size}px`;
    }
  },
  methods: {
    onFileChange(e) {
      this.$createImg(e)
          .then(res => this.imagem = res)
          .then(imgCortada => this.$emit('imgCortada', this.imagem))
    },
  }
}
</script>

<style scoped>
  #file-input{
    display: none;
  }

  .cor-icone {
    color: #e6e4e4cc;
  }
</style>
