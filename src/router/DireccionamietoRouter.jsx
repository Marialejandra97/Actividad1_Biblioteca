import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Alquiler} from "../views/Alquiler";
import {Pagina_inicio} from "../views/Pagina_inicio";
import {Libros_alquilados} from "../views/Libros_alquilados";
import {Informacion} from "../views/Informacion";




export const DireccionamietoRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Libros/" element={<Alquiler />} />
                <Route path="*" element={<Pagina_inicio />} />
                <Route path="/Alquiler/" element={<Libros_alquilados />} />
                <Route path="/Contacto/" element={<Informacion />} />


            </Routes>
        </BrowserRouter>
    );
};