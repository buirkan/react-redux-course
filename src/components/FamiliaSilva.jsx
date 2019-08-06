import React from 'react'
import Membro from './Membro'

export default (props) =>
  <div>
    <Membro nome="Felipe" sobrenome={props.sobrenome}/>
  </div>