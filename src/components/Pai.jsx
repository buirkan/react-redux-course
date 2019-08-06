import React from 'react'
import Filho from './Filho'

class Pai extends React.Component {
  render() {
    const pegaValor = valor => alert(`Valor do Filho: ${valor}`)
    return(
      <React.Fragment>
        <Filho funcao = {pegaValor}/>
      </React.Fragment>
    )
  }
}

export default Pai