import React from 'react'
import './components/Navbar.jsx'
import Navbar from './components/Navbar.jsx'
import CardView from './components/CardView.jsx'
import Adds from './components/Adds.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

const App = () => {
  return <>
  
   
  <Navbar/>
  <Adds/>

  {/* //CardView contains the ColoredButton which contain whatsApp & Telegram button*/}
  <CardView/>

  <Footer/>
  
  </>
}

export default App
