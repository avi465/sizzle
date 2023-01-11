import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Footer />
    </>
  )
}

export default App
