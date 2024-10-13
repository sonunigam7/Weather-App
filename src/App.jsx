import { useState } from 'react'

import './App.css'
import TempApp from './components/TempApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <TempApp/>
    </>
  )
}

export default App
