import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"


import { formatearFecha } from "../helpers";


import IconoAhorro from "../assets/icono_ahorro.svg";
import IconoCasa from "../assets/icono_casa.svg";
import IconoComida from "../assets/icono_comida.svg";
import IconoOcio from "../assets/icono_ocio.svg";
import IconoSalud from "../assets/icono_salud.svg";
import IconoSuscripciones from "../assets/icono_suscripciones.svg";
import IconoGastos from '../assets/icono_gastos.svg'


const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
  gastos: IconoGastos
};

export default function Gasto({ gasto, setGastoEditar, eliminarGasto }) {

  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto) } >
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  

  const trailingActions = () => (
      <TrailingActions>
        <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
  )

  

  return (
    <SwipeableList>
    <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
    >
    <div className="gasto sombra">
      <div className="contenido-gasto">
      <img 
        src={diccionarioIconos[categoria]}
        alt="icono gasto"
      />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {""} <span>{formatearFecha(fecha)}</span>{" "}
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  );
}
