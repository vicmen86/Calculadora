import React from 'react'
import './Pantalla.css'

function Pantalla({input}){

    return (
    <div className='input'>
        {input}
    </div>
    )
}
export default Pantalla
/* 
tambien lo podemos hacer como funcion flecha
const Pantalla=({input})=>(
    <div className='input'>
    {input}
    </div>
)
*/