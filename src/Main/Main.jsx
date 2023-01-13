import React from 'react'
import './Main.scss'
import mainImg from './img/image-interactive.jpg'

const Main = () => {
    return (
        <main className='main'>
            <div className="main__contenedor">
                <div className="main__contenido">
                    <div className="main__img">
                        <img 
                            src={mainImg} 
                            alt="main-img" 
                        />
                    </div>
                    <div className="main__info">
                        <div className="main__texts">
                            <h2 className='main__title'>The leader in interactive vr</h2>
                            <p className='main__paragraph'>Founded in 2011, Loopstudios has been  producing worlds-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiencies that bind to their brand.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main