import React from 'react'

function Tarjetaproyecto(props) {

  const { imagen, nombre, descripcion, link_proyecto } = props;

  return (
    <div className='tarjeta'>
      <img src={imagen} alt="Imagen del proyecto" />
      <div className='info_tarjeta'>
        <a href={link_proyecto} target='blank'>
        <h3>{nombre}</h3>
        <h5>{descripcion}</h5></a>
      </div>
    </div>
  )
}

export default Tarjetaproyecto