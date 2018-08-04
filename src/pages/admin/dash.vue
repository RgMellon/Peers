<template>
  <q-page>
    <section class="loja column items-center">
      <div class="minha-loja">
        <h1 style="font-size:1.2rem;">Minha Loja </h1>
      </div>
      <div class="icone-perfil shadow-1">
        <div avatar style="font-size:5rem;">
          <q-icon name="store" />
        </div>
      </div>
      <div class="info">
        <q-btn icon="info" style="background:white; border-radius:36px;
        width:45px; height:45px; color:#027be3">
        <q-popover>
          <q-list separator link>
            <q-item @click.native="doSomething">
              <p> Bem vindo a sua loja, aqui você pode
                  adicionar produtos para ser visto por todos usuarios,
                  além de adimistra-la... Aproveite!
                  equipe myPeers ;) </p>
            </q-item>
          </q-list>
        </q-popover>
        </q-btn>
      </div>
    </section>

    <div class="acoes-loja" v-if="this.exists_loja.data">
      <q-list highlight>
        <q-list-header>Área administrativa </q-list-header>
        <q-item>
          <q-item-side avatar="statics/calcado-favoritos.png" />
          <q-item-main label="Quantidade calçados"
            sublabel="Essa é a quantidade de calçados que você postou até agora"
          />
          <q-item-side right stamp="33" />
        </q-item>
      </q-list>
      <acoes-loja/>
    </div>
    <div v-if="!this.exists_loja.data" style="margin-top:3rem;">
      <q-list>
        <q-collapsible group="somegroup" icon="info"
          label="Info" opened>
          <div>
            Olá, notamos que ainda não possui uma loja.
            Ter uma loja cadastrada possibilita que seus produtos
            sejam vistos por todos os usuarios. Dando mais visibilidade
            e chances de vendas. Não perca tempo :)
          </div>
        </q-collapsible>
      </q-list>
      <div class="row justify-center" style="margin-top:1rem;">
       <q-btn outline rounded color="primary"
          label="Crie sua loja" :to="{ name: 'criar_loja'}" />
      </div>
    </div>
  </q-page>
</template>


<script>
import AcoesLoja  from '../../components/admin/AcoesLoja';
import User from '../../services/User';
import Loja from '../../services/Loja';

export default {
  name: 'PageDashBoard',

  components: {
    'acoes-loja' : AcoesLoja
  },

  data () {
    return {
      exists_loja: {}
    }
  },

  mounted() {
    User.getUser()
      .then(user => Loja.getLojaByUser(user.id))
      .then(loja => this.exists_loja =  loja);
  },
  methods: {

  },
}
</script>

<style scoped>
  .loja {
    background: #027be3 !important;
    color:white;
  }

  .minha-loja {
    margin-top: 3rem;
  }

  .info {
    position: absolute;
    right: 0px;
    top: 175px;
  }

  .icone-perfil {
    border-radius: 70px;
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: 0rem;
    position: relative;
    top: 15px;
  }
</style>
