import React from 'react'

const isLegal = true;

export default (props) => 
   <div>
    <p>{props.value}</p>
    <p>Legal? {isLegal ? 'true' : 'false'}</p>
    <p>{Math.random()}</p>
  </div>

// function First() {
//   return(
//     <p>First Component</p>
//   );
// }

// export default First

/*
  Notes:
    - Existem duas formas de se declarar um componente, existem as formas
      - Componente baseado por função
      - Componente baseado por classe
    - Quando envolver o componente dentro de uma div ou não?
      - Quando se é chamado dois componentes um em seguida do outro, irá ocorrer uma falha no build. Já se, a chamada dos dois componentes se encontra dentro de uma div, irá buildar e executar a solução sem problema algum.
    - Quando utilizar React.Fragment?
*/