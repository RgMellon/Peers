<template>
  <div>
    <section class="favoritos column" :style="this.cor">
      <div class="head-favoritos">
        <div pading class="breadcrumbs">
          <slot name="bread"></slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['cor'],
  name: 'TemplateHeaderFavoritos',
}
</script>

<style>
.breadcrumbs {
    padding: 1rem;
    height: 60px;
  }
  .img-fav {
    margin-top:-3rem;
    font-size:3rem;

  }
</style>
