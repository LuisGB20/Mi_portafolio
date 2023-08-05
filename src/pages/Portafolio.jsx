import React from 'react'
import Seccion_1 from '../components/Seccion_1'
import Navbar from '../components/Navbar'
import Seccion_2 from '../components/seccion_2'
import Seccion_3 from '../components/seccion_3'
import Seccion_4 from '../components/Seccion_4'
import Seccion_5 from '../components/Seccion_5'
import Footer from '../components/footer'

function Portafolio() {
    return (
        <div className='container_general'>
            <div><Navbar/></div>
            <div><Seccion_1/></div>
            <div><Seccion_2/></div>
            <div><Seccion_3/></div>
            <div><Seccion_4/></div>
            <div><Seccion_5/></div>
            <div><Footer/></div>
        </div>
    )
}
//Push

export default Portafolio