import { useState } from 'react'
import './App.css'
import OverlappingCircle from './overlapping-circle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OverlappingCircle/>
    </>
  )
}

export default App
