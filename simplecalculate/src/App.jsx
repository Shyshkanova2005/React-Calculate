import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FullCalculator from './Full'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <FullCalculator/>
      <Footer/>
    </div>
  )
}

export default App
