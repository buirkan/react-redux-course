import React, {useState, useEffect} from 'react'

const Form = (props) => {
  // [var, functionToManipulateVar]
  const [name, setName] = useState('Mary')
  const [surName, setSurname] = useState('Poppins')
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleResizeWindow = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  // Will be called when component is mounted or updated
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)
    // make handleResizeWindow hook...
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  })

  function handleNameChange(e) {
    console.log(e.target)
    setName(e.target.value)
  }

  function handleSurnameChange(e) {
    console.log(e.target)
    setSurname(e.target.value)
  }

  return (
    <React.Fragment>
      <input value={name} type="text" onChange={handleNameChange}/>
      <input value={surName} type="text" onChange={handleSurnameChange}/>
      <p>Hello, i'm {name} {surName}</p>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </React.Fragment>
  )
}

export { Form }