import React from 'react'
import ReactDOM from 'react-dom'
// import First from './components/FirstComponent'
// import {CompA, CompB} from './components/TwoComponents'
// import MultiElements from './components/MultiElements'
// import Familia from './components/FamiliaSilva'
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteCFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
import {Contador} from './components/Contador'

// view area to render the component content
const element = document.getElementById('root');

ReactDOM.render(
  <div>
    <Contador />
    {/* <Contador numero={0} /> */}
    {/* <Pai /> */}
    {/* <ComponenteCFuncao /> */}
    {/* <Familia sobrenome="Silva">
      <Membro nome="Felipe" />
      <Membro nome="Cindy" />
      <Membro nome="Pedro" />
      <Membro nome="Elise" />
    </Familia> */}
    {/* <FamiliaSilva sobrenome="Silva" /> */}
    {/* <MultiElements /> */}
    {/* <CompA value="Hey! I'm first component" /> */}
    {/* <CompB value="Hello! I'm second component" /> */}
  </div>
  , element)

// ReactDOM.render(<First value="Hello React!" />, element);
// ReactDOM.render(<h1>Hello React</h1>, element);

/* Notes:
  - Sempre que for preciso o uso de código JSX dentro do escopo do javascript, se torna necessário o import do módulo React no mesmo arquivo.
  - O build da aplicação, apenas conhece o arquivo index.js
  - O arquivo chunk.js interpreta e traduz a sintaxe JSX para JS em processo de compilação e interpretação, modificando a sintaxe para a criação de elementos na tela de JSX para JS.
*/
