import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

export default App
