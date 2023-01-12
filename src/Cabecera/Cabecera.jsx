import React from 'react';
import './Cabecera.scss'

const Cabecera = () => {
  return (
    <div className='cabecera'>
      <div className='cabecera__header'>
        <h1 className='cabecera__titulo'>loopstudios</h1>
        <nav className='cabecera__nav'>
          <a className='cabecera__menu' href="">About</a>
          <a className='cabecera__menu' href="">Careers</a>
          <a className='cabecera__menu' href="">Products</a>
          <a className='cabecera__menu' href="">Suport</a>
        </nav>
      </div>
      <h1 className='cabecera__contenido'>INMERSIVE EXPERIENCES THAT DELIVER</h1>
    </div>
  )
}

export default Cabecera