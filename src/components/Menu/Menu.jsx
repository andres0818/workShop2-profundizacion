import React from 'react'
import './Menu.scss'

const Menu = ({lista}) => {
 
 const menu = ['About', 'Careers', 'Events', 'Products', 'Suport']


 console.log(lista);

 lista===undefined?lista=menu:lista=lista

   return (
        <nav className='nav'>
            <ul className='nav__contenedorLista'>
                {
                    lista.map((e, index) => {
                        return (
                            <li key={index} className='nav__lista'>
                                <a className='nav__menu' href="">{e}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    ) 
}

export default Menu