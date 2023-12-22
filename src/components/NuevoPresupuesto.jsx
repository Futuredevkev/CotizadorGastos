import React, { useState } from 'react'
import Mensaje from './Mensaje'

export default function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();
    
    if(!presupuesto || presupuesto < 0) {
        setMensaje('No es un presupuesto valido')

        return;
    } 

    setMensaje('') // Si el usuario pone presupuesto valido se reinicia el cartel de error
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      

    <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
        <label>Definir Presupuesto</label>
        
        <input className='nuevo-presupuesto' type='number' placeholder='Añade tu presupuesto' value={presupuesto} onChange={e => setPresupuesto(Number(e.target.value))} />

        <input type='submit' value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
    </form>

    </div>
  )
}
