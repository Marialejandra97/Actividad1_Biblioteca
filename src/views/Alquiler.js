import React from 'react';
import { useContext, useState, useEffect } from 'react';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Libros.css';
import '../styles/Contenedortitulolibro.css';
import '../styles/Buscador.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Libros} from "../components/Libros";
import {Contenedortitulolibro} from "../components/Contenedortitulolibro";
import {Buscador} from "../components/Buscador";
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
                    {librosFiltrados.map((libritos, index) => (
                        <Libros
                            key={index}
                            nombre={libritos.nombre}
                            autor={libritos.autor}
                            aniopublicacion={libritos.anio_publicacion}
                            isbn={libritos.codigo_isbn}
                            imagen_portada={libritos.imagen_portada}
                            sipnosis={libritos.sipnosis}
                            critica={libritos.critica}
                            onButtonClick={handleAlquilarLibro}
                        />
                    ))}

                </div>
            </div>
            <Footer/>
        </div>
    );
}