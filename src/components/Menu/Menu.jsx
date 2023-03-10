import React from 'react'
import './Menu.scss'

const Menu = ({ lista }) => {

    const menu = ['About', 'Careers', 'Events', 'Products', 'Suport']

    lista === undefined ? lista = menu : lista = lista

    return (
        <nav className='nav'>
            <img src="" alt="" />
            <ul className='nav__contenedorLista'>
                {
                    lista.map((e, index) => {
                        return (
                            <li key={index} className='nav__lista'>

                                {
                                    e.length >= 15 ? <img src={e} alt="" /> : <a className='nav__menu' href="">{e}</a>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Menu