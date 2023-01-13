import React from 'react';
import Menu from '../Menu/Menu';

import icon from './img/menu.svg'
import './Cabecera.scss'

const Cabecera = () => {



  return (
    <div className='cabecera'>
      <div className='cabecera__header'>
        <h1 className='cabecera__titulo'>loopstudios</h1>
        <div>
          <div className='nav__menus'>
            <Menu />
          </div>          
          <img className='nav__responsiveMenu' src={icon} alt="" />          
        </div>
      </div>
      <h1 className='cabecera__contenido'>INMERSIVE EXPERIENCES THAT DELIVER</h1>
    </div>
  )
}

export default Cabecera