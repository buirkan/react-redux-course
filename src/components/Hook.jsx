import React, {useState, useEffect} from 'react'

// Hooks: tratamento para "states" em componentes funcionais
//"Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais" 👍 
export default (props) => {
  // [elementoASerMudado, FuncaoQueMudaElemento] - 
  const [count, setCount] = useState(0)
  const [oddEven, setOddEven] = useState('Even')
  
  // Similar à componentDidMount() || ComponentDidUpdate()
  // Quando se chama useEffect, se está dizendo ao React para executar a sua função após liberar as mudanças para o DOM
  useEffect(() => {
    console.log('Component useEffect event')
    count % 2 === 0 ? setOddEven('Even') : setOddEven('Odd')
  })

  return(
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
      <p>{oddEven}</p>
    </React.Fragment>
  )
}

/*
  Regras dos Hooks:

  - Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.
  - Apenas chame Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns. (Há apenas um outro lugar válido para se chamar Hooks — dentro dos seus próprios Hooks customizados.
*/