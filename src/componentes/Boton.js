import React from 'react';
import './Boton.css'
const esOperador=(valor)=>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
}


function Boton(props){
    return(
        <div className={`boton-contenedor ${esOperador(props.children)? 'operador':null}`}
        onClick={()=>props.manejarClic(props.children)}>
            {props.children}

        </div>
    )
}
export default Boton;