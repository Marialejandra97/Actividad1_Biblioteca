import { useState, useEffect, useContext } from 'react';
import { LibrosContext } from "../components/Libros_contexto";

const useLibros = () => {
    const librosalquilados=[];
    const { librosAlquilados, setLibrosAlquilados } = useContext(LibrosContext); //Libros alquilados
    const [todosLibros, setTodosLibros] = useState([]);//Todos los libros
    const [busqueda, setBusqueda] = useState(""); // Estado para almacenar el término de búsqueda
    const [librosFiltrados, setLibrosFiltrados] = useState([]); // Estado para almacenar los libros filtrados

    useEffect(() => {
        // Cargar libros alquilados de localStorage al montar el componente


        fetch('/libritosdisponibles.json')
            .then(response => response.json())
            .then(data => setTodosLibros(data))
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }, [setLibrosAlquilados]);



    useEffect(() => {
        // Actualizar librosFiltrados cuando todosLibros cambie
        setLibrosFiltrados(todosLibros);
    }, [todosLibros]);


    const buscarLibros = (term) => {


        const resultados = todosLibros.filter(libro =>
            libro.nombre.toLowerCase().includes(term.toLowerCase()) ||
            libro.autor.toLowerCase().includes(term.toLowerCase())
        );
        console.log("entro: " +resultados)
        setLibrosFiltrados(resultados);

    };

    const handleBusquedaChange = () => {
        const valor=document.getElementById("txtvalor").value
        setBusqueda(valor);
        buscarLibros(valor);

    };

    const handleAlquilarLibro = (libro) => {
        const libroExistente = librosAlquilados.find(item => item.nombre === libro.nombre);
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        const fechaalquiler=hoy.toLocaleDateString(); // "14/6/2020"
        libro.fechainicio=fechaalquiler;

        //Agregar el tiempo que se establece cuando se alquila un libro
        //Se establece un periodo de 14 dias
        const now = new Date()
        now.setDate(now.getDate() + 14)
        const a  = new Date(now);
        const b=a.toLocaleDateString();
        libro.fechafin=b;
        if (libroExistente) {
            alert('El libro ya lo alquilaste');
            return;
        }

        const nuevosLibrosAlquilados = [...librosAlquilados, libro];
        setLibrosAlquilados(nuevosLibrosAlquilados);

    };

    return {
        librosAlquilados,
        todosLibros,
        busqueda,
        librosFiltrados,
        handleBusquedaChange,
        handleAlquilarLibro
    };
};

export default useLibros;
