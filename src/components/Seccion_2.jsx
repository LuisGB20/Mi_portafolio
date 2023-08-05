import React from 'react'

function Seccion_2() {
    return (
        <div className='seccion_2' id='seccion_2'>
            <div className='izq'>
                <h2 id='nombre'>Hola, soy Luis Alberto Gomez Broca</h2>
                <p>Diseñador / Desarrollador / Creador</p>
            </div>
            <div className='der'>
                <div className='bio'>
                    <p>Naci en la ciudad de Cancún en el año 2004 y desde entonces he radicado en esta bella ciudad.</p>
                    <p>En el año 2022 comence a estudiar en la universidad la carrera de Ingenieria en desarrollo y gestion de software.</p>
                    <p>Soy una persona que busca dar lo mejor de si, con ganas de aprender y sobre todo mejorar</p>
                </div>
                <div className='love'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor" />
                    </svg>
                    <div className='love_tag'>
                    <h3>#Videojuegos</h3>
                    <h3>#Musica</h3>
                    <h3>#Autos</h3>
                    <h3>#Familia</h3>
                    <h3>#Arte</h3>
                    <h3>#Editar_videos</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seccion_2