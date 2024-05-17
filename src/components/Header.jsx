import React from "react";
import {useNavigate} from "react-router";
import { Link } from "react-router-dom";

export const Header = () => {

    return (

        <header >
            <div className="footer-contenedorprincipal">
                <div className="footer-contenedorprincipal-menu">

                    <label className="footer-contenedorprincipal-menu-titulo">
                        <img src="../libro.png" className="footer-contenedorprincipal-menu-titulo-icono"/>Librin
                    </label>
                    <nav className="footer-contenedorprincipal-menu-navbar">
                        <ul>
                            <li className="footer-contenedorprincipal-menu-navbar-listas">
                                <Link to="*" className="footer-contenedorprincipal-menu-navbar-listas-enlaces">
                                    Inicio
                                </Link>
                            </li>
                            <li className="footer-contenedorprincipal-menu-navbar-listas">
                                <Link to="/Libros" className="footer-contenedorprincipal-menu-navbar-listas-enlaces">
                                    Libros
                                </Link>
                            </li>
                            <li className="footer-contenedorprincipal-menu-navbar-listas">
                                <Link to="/Alquiler" className="footer-contenedorprincipal-menu-navbar-listas-enlaces">
                                    Alquiler
                                </Link>
                            </li>
                            <li className="footer-contenedorprincipal-menu-navbar-listas">
                                <Link to="/Contacto" className="footer-contenedorprincipal-menu-navbar-listas-enlaces" href="#">
                                    Contacto
                                </Link >
                            </li>

                        </ul>
                    </nav>


                </div>

            </div>

        </header>

    );
}