import React from 'react'
import Cabecera from './components/Cabecera/Cabecera'
import Informacion from './components/Informacion/Informacion'
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => {
  return (
    <>
      <Cabecera />
      <Informacion />
      <Footer />
    </>
  )
}

export default App