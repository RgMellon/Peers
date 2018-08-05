<template>
  <q-page>
    <header-fav cor="background:#324c73;">
      <div slot="bread">
        <q-breadcrumbs  separator=">" active-color="amber" color="light">
              <q-breadcrumbs-el label="Perfil" to="/usuario" />
              <q-breadcrumbs-el label="Calçados favoritos" />
        </q-breadcrumbs>
      </div>
    </header-fav>
    <div v-for=" i of this.calcadoFavoritos" :key="i.id"
      class="calcado-favorito row justify-end">

        <lista class="lista-items"
          :nome="i.nome" :descricao="i.descricao"
          :img="i.img" :preco="i.preco">
        </lista>
      {{ i }}
        <q-btn round class="btn-delete" @click="remove(i)"
          icon="fas fa-trash-alt" color="red" />

    </div>
  </q-page>
</template>

<script>
import headerFav from './template-header';
import Favorito from '../../../services/Favorito';
import ListaResultadosIndex from '../../../components/ListaResultadosIndex';

export default {
  name: 'CalcadosFavoritos',
  components : {
    'header-fav': headerFav,
    'lista' : ListaResultadosIndex,
  },
  data() {
    return {
      calcadoFavoritos : {},
    }
  },
  mounted() {
    Favorito.get()
      .then(res => this.calcadoFavoritos = res);
  },

  methods: {
    remove(obj) {
      console.log(obj);
    }
  }
}
</script>

<style scoped>
  .lista-items {
    width: 100%;
  }

  .btn-delete {
    margin-top:-2rem;
  }

</style>
