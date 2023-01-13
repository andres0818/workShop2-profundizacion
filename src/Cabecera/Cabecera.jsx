import React from 'react';
import './Cabecera.scss'

const Cabecera = () => {
  return (
    <div className='cabecera'>
      <div className='cabecera__header'>
        <h1 className='cabecera__titulo'>loopstudios</h1>
        <nav className='cabecera__nav'>
          <a className='cabecera__menu' href="">
            About
            <p className='hover'></p>
          </a>
          <a className='cabecera__menu' href="">
            Careers
            <p className='hover'></p>
          </a>
          <a className='cabecera__menu' href="">
            Products
            <p className='hover'></p>
          </a>
          <a className='cabecera__menu' href="">
            Suport
            <p className='hover'></p>
          </a>
        </nav>
      </div>
      <h1 className='cabecera__contenido'>INMERSIVE EXPERIENCES THAT DELIVER</h1>
    </div>
  )
}

export default Cabecera