import React from "react";
import {useNavigate} from "react-router";
import { Link } from "react-router-dom";

export const Header = () => {

    return (

        <header className="header" >
                <div className="header-contenedor-menu">

                    <label className="header-contenedor-menu-lbl">
                        <img src="../libro.png" className="header-contenedor-menu-icono"/>Librin
                    </label>
                    <nav className="header-contenedor-menu-navar">
                        <ul>
                            <li className="header-contenedor-menu-navar-listas">
                                <Link to="*" className="header-contenedor-menu-navar-listas-link">
                                    Inicio
                                </Link>
                            </li>
                            <li className="header-contenedor-menu-navar-listas">
                                <Link to="/Libros" className="header-contenedor-menu-navar-listas-link">
                                    Libros
                                </Link>
                            </li>
                            <li className="header-contenedor-menu-navar-listas">
                                <Link to="/Alquiler" className="header-contenedor-menu-navar-listas-link">
                                    Alquiler
                                </Link>
                            </li>
                            <li className="header-contenedor-menu-navar-listas">
                                <Link to="/Contacto" className="header-contenedor-menu-navar-listas-link" href="#">
                                    Contacto
                                </Link >
                            </li>

                        </ul>
                    </nav>


                </div>



        </header>

    );
}