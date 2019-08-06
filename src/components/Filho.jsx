import React from 'react'

class Filho extends React.Component {
  render() {
    return(
      <React.Fragment>
        <button onClick={() => this.props.funcao('Primeiro Filho')}>
          Sou um botao1</button>
      </React.Fragment>
    )
  }
}

export default Filho