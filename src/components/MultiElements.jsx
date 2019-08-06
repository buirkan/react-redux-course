import React from 'react'

//Solução 3
// export default props =>
// [
//     <h1>Parte 1</h1>,
//     <h2>Parte 2</h2>
// ]

//Solução 2 (mais utilizada)
export default props =>
  <div>
    <h1>Parte 1</h1>
    <h2>Parte 2</h2>
  </div>

//Solução 1
// export default props =>
//   <React.Fragment>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </React.Fragment>

/* Exportando vários elementos dentro de um componente à ser importado */