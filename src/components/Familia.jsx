import React from 'react'
import { childrenWithProps } from '../Utils/utils'

export default (props) => {
    return (
      <div>
        {/* React.cloneElement(elementoParaClonar, propriedade):
          Função do React que pega os elementos filhos que foram recebidos e através desse clone se obtém a possibilidade de passar propriedades para esse clone do filho gerado. O clone gerado com as novas propriedades é que vão ser renderizados na tela */}
        {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome })} */}

        {/* Passando todas as propriedades para o objeto a ser clonado, não se costuma passar a mesma referência das propriedades recebidas pelo componente, e sim um clone dessas propriedades. Técnica realizada através do operador spreads (...) que espalha as propriedades do objeto referenciado dentro do novo objeto criado, assim como é mostrado abaixo: */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* Não utilizado - {React.cloneElement(props.children, { props })} */}

        {/* React.Children.map(todosComponentesFilhos, callback):
            Como Funciona? - Aplica a função callback para cada elemento do array, e retorna um novo array com o resultado.
            Quais as propriedades da classe React? */}
        {/* {React.Children.map(props.children, child => {
          return React.cloneElement(child, { ...props })
        })
        } */}
        {childrenWithProps(props)}
      </div>
    )
}

/* 
  O método map() invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado
  O método forEach() executa uma dada função em cada elemento de um array
  
  Em outras palavras...

  O forEach manipula os dados reais de um array, e o map cria um novo array.
  */