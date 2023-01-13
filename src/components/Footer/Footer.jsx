import React from 'react'
import Menu from '../Menu/Menu'

import facebook from './img/facebook.svg'
import instagram from './img/icon-instagram.svg'
import pinterest from './img/icon-pinterest.svg'
import twitter from './img/icon-twitter.svg'

import './Footer.scss'

const Footer = () => {
    const redes = [facebook, instagram, pinterest, twitter]

    return (

        <>
            <div className='footer'>
                <div className='footer__info'>
                    <h1 className='footer__titulo'>loopstudio</h1>
                    <Menu/>
                </div>
                <div className='footer__redes'>
                    <Menu lista={redes} />
                    <p >© 2021 loopstudios. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer