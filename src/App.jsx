import { useState } from 'react'
import './App.css'
import Title from './Components/aTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title/>
      </div>
    </>
  )
}

export default App
