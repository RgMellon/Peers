<template>
  <q-page pading>
      <card
      nome="Bota" preco="90.90" desc="Bota Cano curto"
      img="bota.jpg" nomeEmpresa="Raffas Calçado"
      descEmpresa="Melhores regiao">
    </card>
  </q-page>
</template>


<script>
import Card from '../components/Card';
export default {
  name: 'PaginaDetalheCalcado',
  components: {
    'card': Card,
  },
}
</script>

<style>
</style>
