import React from 'react'

const aprovados = [ 'Paulo', 'Gustavo' ]

/* Componente por classe */
class ComponentWithFunction extends React.Component {
  render() {
    const gerarItens = itens => {
      return itens.map(item => <li>{item}</li>)
    }

    return (
      <React.Fragment>
        <ul>
          <li>{gerarItens(aprovados)}</li>
        </ul>
      </React.Fragment>
    )
  }
}

export default ComponentWithFunction

/* Componente funcional */
// export default (props) => {
//   const gerarItens = itens => {
//      return itens.map(item => <li>{item}</li>)
//   }

//   return (
//     <React.Fragment>
//       <ul>
//         {gerarItens(aprovados)}
//       </ul>
//     </React.Fragment>
//   )
// }
