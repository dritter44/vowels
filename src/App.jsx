import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputLine from "./components/input"
import SubmitButton from './components/submitButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <h1>Hello robby!</h1>
      <InputLine/>
      <SubmitButton/>
    </div>
  )
}

export default App