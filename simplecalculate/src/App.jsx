import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FullCalculator from './Full'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  
      <FullCalculator/>
    </div>
  )
}

export default App
