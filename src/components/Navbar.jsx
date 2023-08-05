import React from 'react'

function Navbar() {
    return (
        <div className='nav'>
            <nav className='navbar'>
                <div className='left'>
                    <a href="/">Inicio</a>
                </div>
                <div className='right'>
                    <a href="#seccion_2">Información</a>
                    <a href="#seccion3">Habilidades</a>
                    <a href="#seccion4">Proyectos</a>
                    <a href="#seccion5">Contacto</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar