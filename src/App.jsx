import React from 'react'

import Main from './Main/Main'

import Cabecera from './components/Cabecera/Cabecera'
import Informacion from './components/Informacion/Informacion'
import Footer from './components/Footer/Footer'


import './App.scss'

const App = () => {
  return (
    <>
      <Cabecera />
      <Main />
      <Informacion />
      <Footer />
    </>
  )
}

export default App