import React from "react";

export const Buscador = ({  onBusquedaChange }) => {
    return (
        <div className="contenedor-buscador">
            <input id="txtvalor" onChange={() => onBusquedaChange()} className="contenedor-buscador-input" placeholder="Busca por nombre o autor..."/>
        </div>
    );
}