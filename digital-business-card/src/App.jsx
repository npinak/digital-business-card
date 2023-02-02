import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Picture from './components/Picture'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-div">
      <Picture />
      <About />
      <Footer />
    </div>
  )
}

export default App
