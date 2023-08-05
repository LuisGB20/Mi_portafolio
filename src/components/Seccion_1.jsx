import React, { useState } from 'react';
import imagen from '../assets/yo.jpeg'

function Seccion_1() {
    const [isRotated, setIsRotated] = useState(false);

    const handleMouseEnter = () => {
        setIsRotated(true);
    };

    const handleMouseLeave = () => {
        setIsRotated(false);
    };

    return (
        <div className='seccion_1' id='seccion1' >
            <div className='introduccion'>
                <h1 id='desarrollador'>Desarrollador de software Front-End y Back-End</h1>
                <h2>Bienvenido a mi portafolio.</h2>
                <div className={`sobremi ${isRotated ? 'rotated' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                    <a href="#seccion_2">Mas sobre mi</a>
                    <a href="#seccion_2" id='flecha'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor" />
                    </svg></a>
                </div>
            </div>
            <div className='imagen'>
            <div className='imagen_borde'></div>
            <div className='mifoto'></div>
            </div>
        </div>
    )
}

export default Seccion_1