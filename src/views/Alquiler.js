import React from 'react';
import { useContext, useState, useEffect } from 'react';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Libros.css';
import '../styles/Buscador.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Libros} from "../components/Libros";
import { LibrosContext} from "../components/Libros_contexto";
import {Contenedortitulolibro} from "../components/Contenedortitulolibro";
import {Buscador} from "../components/Buscador";
import UseFetchLibros from "../Hook/useActualizacion";
import useLibros from "../Hook/useLibros";



export const Alquiler = () => {


    const {
        librosAlquilados,
        librosFiltrados,
        handleBusquedaChange,
        handleAlquilarLibro
    } = useLibros();


    return (
        <div>
            <Header/>
            <div className="Contenedor-principal">
                <Contenedortitulolibro/>
                <Buscador
                    onBusquedaChange={handleBusquedaChange}/>
                <div className="Contenedor-principal-libros">
                    {librosFiltrados.map((restaurant, index) => (
                        <Libros
                            key={index}
                            nombre={restaurant.nombre}
                            autor={restaurant.autor}
                            aniopublicacion={restaurant.anio_publicacion}
                            isbn={restaurant.codigo_isbn}
                            imagen_portada={restaurant.imagen_portada}
                            sipnosis={restaurant.sipnosis}
                            critica={restaurant.critica}
                            onButtonClick={handleAlquilarLibro}
                        />
                    ))}

                </div>
            </div>
            <Footer/>
        </div>
    );
}