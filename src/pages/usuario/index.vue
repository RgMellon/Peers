<template>
  <q-page>
    <section class="perfil column items-center">
      <div class="minha-conta">
        <h1 style="font-size:1.2rem;">Minha Conta </h1>
      </div>
      <div class="icone-perfil">
        <div avatar style="font-size:5rem;">
          <q-icon name="fas fa-user-circle" />
        </div>
      </div>
      <div class="nome-perfil">
        <p> {{ user.name }} </p>
      </div>
    </section>
    <section class="area-acoes">
      <acoes-perfil />
    </section>
    <section>
      <btn-sair/>
    </section>
  </q-page>
</template>

<script>
import AcoesPerfil from '../../components/admin/AcoesPerfil';
import BtnSair  from '../../components/admin/BtnSair';
import sessionStorage from '../../services/sessionStorage';

import User from '../../services/User';

export default {
  components: {
    'acoes-perfil': AcoesPerfil,
    'btn-sair' : BtnSair,
  },
  data() {
    return {
      user: {},
    }
  },
  mounted() {
    User.getUser()
      .then(user => this.user = user);
  },
}
</script>

<style>
.perfil {
  background: rgb(255, 193, 7);
  color:white;
}
.nome-perfil {
  margin-top:1rem;
}
</style>
