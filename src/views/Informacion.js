import React from 'react';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Acercade.css';
import '../styles/Mision.css';
import '../styles/Vision.css';
import '../styles/Informacion.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Acercade} from "../components/Acercade";
import {Mision} from "../components/Mision";
import {Vision} from "../components/Vision";





export const Informacion = () => {


    return (
        <div className= "contenedor-primario">
            <Header/>
            <div className="contenedor-primario-info">
            <Acercade></Acercade>
            <Mision></Mision>
            <Vision></Vision>
            </div>

            <Footer/>
        </div>
    );
}