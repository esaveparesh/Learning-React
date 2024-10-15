import { useState } from 'react'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(0)

  const addValue =()=>{

    setCounter(Counter)
    if (Counter < 20) {
      Counter = Counter + 1
      setCounter(Counter)
    } else {
      alert('Value can not go up to 20')
    }
  }
  const decreaseValue=()=>{
    setCounter(Counter)
    if (Counter >= 1) {
      Counter = Counter - 1
      setCounter(Counter)
    } else {
      alert('Value can not go Negative Value')
    }
    
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>Add Value to:{Counter}</button>
      <br/><br/>
      <button onClick={decreaseValue}>Decrease Value to:{Counter}</button>
      <h3>current value:{Counter}</h3>
    </>
  )
}

export default App;
