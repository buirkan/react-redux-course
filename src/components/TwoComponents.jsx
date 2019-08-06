import React from 'react'

const CompA = (props) =>
  <div>
    <p>Primeiro componente diz: {props.value}</p>
  </div>

const CompB = (props) =>
  <div>
    <p>Segundo componente diz: {props.value}</p>
  </div>

// export default function(){
//   return <p>Teste</p>
// }

export {CompA, CompB}