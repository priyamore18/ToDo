import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './component/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo/>
      
    </>
  )
}

export default App
