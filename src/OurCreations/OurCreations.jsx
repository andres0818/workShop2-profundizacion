import React, { useState } from 'react'
import './OurCreations.scss'
import data from './DataCreations'
import dataMobile from './DataCreationsMobile'

const OurCreations = () => {
  const cartas = data

  const cartasMobile = dataMobile

  return (
    <>
      <div className='escritorio'>
        <div className='seccion-titulo'>
          <h2 className='titulo'>OUR CREATIONS</h2>
          <button className='boton'>See All</button>
        </div>

        <div className='seccion-cartas'>
          {cartas.map(carta => {
            return (
              <div className='carta'>
                <div className='contenido-carta'>
                  <img
                    className='imagen'
                    src={carta.imagen}
                    alt='creation card'
                  />
                  <h3 className='subtitulo'>{carta.titulo}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/*-------------MOBILE VERSION-------*/}
      <div className='mobile'>
        <div className='seccion-titulo'>
          <h2 className='titulo'>OUR CREATIONS</h2>
        </div>
        <div className='seccion-cartas-mobile'>
          {cartasMobile.map(carta => {
            return (
              <div className='carta'>
                <div className='contenido-carta'>
                  <img
                    className='imagen'
                    src={carta.imagen}
                    alt='creation card'
                  />
                  <h3 className='subtitulo'>{carta.titulo}</h3>
                </div>
              </div>
            )
          })}
        </div>
        <button className='boton'>See All</button>
      </div>
    </>
  )
}

export default OurCreations
