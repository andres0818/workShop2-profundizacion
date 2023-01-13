import React from 'react'
import './OurCreations.scss'
import data from './DataCreations'

const OurCreations = () => {
  const [cartas, setCartas] = React.useState(data)

  return (
    <>
      <div className='seccion-titulo'>
        <h2 className='titulo'>OUR CREATIONS</h2>
        <button className='boton'>See All</button>
      </div>

      <div className='seccion-cartas'>
        {cartas.map(carta => {
          return (
            <div className='carta'>
              <div className='contenido-carta'>
                <img className='imagen' src={carta.imagen} alt='creation card' />
                <h3 className='subtitulo'>{carta.titulo}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OurCreations
