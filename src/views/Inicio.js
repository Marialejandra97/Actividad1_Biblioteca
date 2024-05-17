import React from 'react';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Contenedorscroll.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Mensaje_bienvenida} from "../components/Mensaje_bienvenida";

export const Inicio = () => {


    return (
        <div>
            <Header/>
                <Mensaje_bienvenida></Mensaje_bienvenida>

            <Footer/>
        </div>
    );
}