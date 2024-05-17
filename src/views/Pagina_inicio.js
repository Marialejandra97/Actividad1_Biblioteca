import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Libros.css';
import '../styles/Mensaje_bienvenida.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Mensaje_bienvenida} from "../components/Mensaje_bienvenida";


export const Pagina_inicio = () => {
    return (
        <div>
            <Header/>
            <Mensaje_bienvenida></Mensaje_bienvenida>
            <Footer/>



        </div>
    );
}