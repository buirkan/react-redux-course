import React from 'react'

class Contador extends React.Component {
  // Solucionando o problema do "this", onde a referência para as funções do componente
  // são disparadas através de um evento de "click", e o this não aponta para onde a 
  // função referenciada se encontra.
  // Todo objeto props passado: read only!

  // constructor(props) {
  //   super(props)
  //   // Not call setState()!
  //   // Avoid copying props into state! 
    
  //   this.decrement = this.decrement.bind(this)
  //   this.increment = this.increment.bind(this)
  // }

  state = { numero: 0 }

  decrement = () => 
    this.setState({ numero: this.state.numero - 1 })

  increment = () => 
    this.setState({ numero: this.state.numero + 1 })

  render() {
    return(
      <React.Fragment>
        <div>Número: { this.state.numero }</div>
        <button onClick={this.decrement}>Decrementar</button>
        <button onClick={this.increment}>Incrementar</button>
        {/* <button onClick={() => this.decrement()}>Decrementar</button>
        <button onClick={() => this.increment()}>Incrementar</button> */}
      </React.Fragment>
    )
  }
}

export {Contador}