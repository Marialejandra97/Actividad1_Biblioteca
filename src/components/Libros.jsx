import React from "react";


export const Libros = ({ nombre, autor, aniopublicacion, isbn, imagen_portada, sipnosis, critica, fechainicio, fechafin, onButtonClick }) => {
    return (
     <div id="container" className="Contenedor-principal-libros-unidad">
            <div className="Contenedor-principal-libros-unidad-img">
                <img className="Contenedor-principal-libros-unidad-img-vista" src={imagen_portada}/>
            </div>
            <div className="Contenedor-principal-libros-unidad-txt">
                <label  className="Contenedor-principal-libros-unidad-txt-1">Titulo:</label>
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
                <label className="Contenedor-principal-libros-unidad-txt-1">Sipnosis:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{sipnosis}</label>
                <br/>
                <label className="Contenedor-principal-libros-unidad-txt-1">Genero:</label>
                <label className="Contenedor-principal-libros-unidad-txt-resulado">{critica}</label>
            </div>
            <div className="Contenedor-principal-libros-unidad-btn">
                <button onClick={() => onButtonClick({ nombre, autor, aniopublicacion, isbn, imagen_portada, sipnosis, critica, fechainicio, fechafin })}  className="Contenedor-principal-libros-unidad-btn-alquilar">
                    Alquilar
                </button>
            </div>

        </div>

    );
}