import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Picture from './components/Picture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-div">
      <Picture />
    </div>
  )
}

export default App
