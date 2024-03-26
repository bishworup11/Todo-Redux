import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{textAlign:'center', marginBottom:'60px'}}>Todo</h1>

      <TodoForm/>
       
    </>
  )
}

export default App
