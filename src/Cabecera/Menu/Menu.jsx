import React from 'react'
import './Menu.scss'

const Menu = () => {
    return (
        <nav className='nav'>
            <ul className='nav__contenedorLista'>
                <li className='nav__lista'>
                    <a className='nav__menu' href="">About</a>
                </li>
                <li className='nav__lista'>
                    <a className='nav__menu' href="">Careers</a>
                </li>
                <li className='nav__lista'>
                    <a className='nav__menu' href="">Products</a>
                </li>
                <li className='nav__lista'>
                    <a className='nav__menu' href="">Suport</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu