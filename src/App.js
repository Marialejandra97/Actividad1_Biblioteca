import React from "react";
import { useState } from "react";
import './App.css';
import {Pagina_inicio} from "./views/Pagina_inicio";
import {DireccionamietoRouter} from "./router/DireccionamietoRouter";
import {Libros_contexto} from "./components/Libros_contexto";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";
import {LibrosProvider} from "./components/Libros_contexto";


function App() {
  const [Data, seData] = useState([]);

  return (
      <>
        <LibrosProvider >
        <DireccionamietoRouter></DireccionamietoRouter>
        </LibrosProvider>
      </>
  );

}

export default App;
