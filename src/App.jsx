import React from 'react'
import Main from './Main/Main'
import Cabecera from './components/Cabecera/Cabecera'
import Footer from './components/Footer/Footer'

import './App.scss'
import OurCreations from './components/OurCreations/OurCreations'


const App = () => {
  return (
    <>
      <Cabecera />
      <Main />
      <OurCreations/>
      <Footer />
    </>
  )
}

export default App