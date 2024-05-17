import React from "react";


export const LibrosAlquilados = ({ nombre, autor, aniopublicacion, isbn, imagen_portada, fecha_inicio, fecha_fin, onButtonClick, onButtonClick2 }) => {

    return (
        <div id="container" className="Contenedor-principal-libros-unidad">
            <div className="Contenedor-principal-libros-unidad-img">
                <img className="Contenedor-principal-libros-unidad-img-vista" src={imagen_portada}/>
            </div>
            <div className="Contenedor-principal-libros-unidad-txt">
                <label className="Contenedor-principal-libros-unidad-txt-1">Titulo:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{nombre}</label>
                <br/>
                <label className="Contenedor-principal-libros-unidad-txt-1">Autor:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{autor}</label>
                <br/>
                <label className="Contenedor-principal-libros-unidad-txt-1">Año de publicación:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{aniopublicacion}</label>
                <br/>
                <label className="Contenedor-principal-libros-unidad-txt-1">ISBN:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{isbn}</label>
                <br/>
                <label className="Contenedor-principal-libros-unidad-txt-1">Fecha de Inicio Alquilada:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{fecha_inicio}</label>
                <br/>
                <label className="Contenedor-principal-libros-unidad-txt-1">Fecha de Fin Alquilada:</label>
                <label id="lblAplazar" className="Contenedor-principal-libros-unidad-txt-resulado">{fecha_fin}</label>
                <br/>
                <button onClick={() => onButtonClick({ nombre, autor, aniopublicacion, isbn, fecha_inicio, fecha_fin })}  className="Contenedor-principal-libros-unidad-txt-btnaplazar">Aplazar entregra</button>
                <button onClick={() => onButtonClick2({ nombre, autor, aniopublicacion, isbn, fecha_inicio, fecha_fin })}className="Contenedor-principal-libros-unidad-txt-btnaplazar">Devolver libro</button>
            </div>

        </div>

    );
}