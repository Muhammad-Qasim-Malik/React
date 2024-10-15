import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter] = useState(2)
  const addValue = () => {
    if(counter < 20){
    setcounter(counter + 1)
    }
  }
  const decValue = () => {
    if(counter != 0){
      setcounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Main aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
