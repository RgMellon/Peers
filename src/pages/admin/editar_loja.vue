<template>
  <q-page>
    <section class="editar-loja">
        <loja-update></loja-update>
    </section>
 </q-page>
</template>

<script>

import LoJaUpdate from '../../components/admin/LojaUpdate';

export default {
  name: 'LojaEditar',

  components: {
    'loja-update' : LoJaUpdate,
  },

}
</script>

<style scoped>

</style>
