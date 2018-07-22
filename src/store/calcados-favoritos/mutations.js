export default {

  ADICIONA_FAVORITO(state, value) {
    if(state.calcados_favoritos.length > 0) {
      const posicao = state.calcados_favoritos.findIndex( p => {
        return value.id == p.detalhe.id;
      })

      if(posicao === -1) {
        state.calcados_favoritos.push({
          detalhe: value
        })
      } else {
        return;
      }
    } else {
      state.calcados_favoritos.push({
        detalhe: value
      })
    }
  }
}
