import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Headers from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Headers />

      /* you can think of it as a placeholder for the components 
      that will be rendered based on the route */
      <Outlet /> 

      <Footer />
    </>
  )
}

export default App
