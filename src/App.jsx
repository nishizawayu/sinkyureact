import { useState } from 'react'
import './index.css'
import Header from './Header'
import First from './First'
import Footer from './Footer'
import Switch from './switch'
import Office from './Office'

function App() {
  return (
    <div className="App">
      <Header/>
      <Office/>
      <Footer/>
    </div>
  )
}

export default App
