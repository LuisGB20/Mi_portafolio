import React from 'react'
import Tarjetaproyecto from './Tarjetaproyecto'
import Mixmap from '../assets/Mixmap_Proyecto.png'

function Seccion_4() {
  return (
    <div className='seccion_4' id='seccion4'>
      <h1>Mis trabajos</h1>
      <div className='contenedor_proyectos'>
        <div><Tarjetaproyecto imagen={Mixmap} nombre="Mixmap clon" descripcion="HTML, CSS" link_proyecto="https://luisgb20.github.io/Maquetado_pagina_mixmap/"/></div>
      </div>
    </div>
  )
}

export default Seccion_4