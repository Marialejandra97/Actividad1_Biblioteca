import React , {useState, useEffect} from 'react';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Libros.css';
import '../styles/Mensaje_bienvenida.css';
import '../styles/Libros_aquilados.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import { useContext } from 'react';
import {LibrosContext} from "../components/Libros_contexto";
import {LibrosAlquilados} from "../components/Libros.alquilados";
import {Contenedortituloalquilados} from "../components/Contenedortituloalquilados";
import UseActualizacion from "../Hook/useActualizacion";



export const Libros_alquilados = () => {

    const {  librosAlquilados } = useContext(LibrosContext);
    const [alquilados, setAlquilados] = useState([]);
    const forceUpdate = UseActualizacion();


    //Para actualizar el estado de los libros alquilados cuando cambia el contexto de los libros (librosAlquilados).
    useEffect(() => {
        setAlquilados(librosAlquilados);
    }, [librosAlquilados]);

    useEffect(() => {
        console.log("hola");
    });

    console.log(librosAlquilados);




    const handlerAplazarentrega = (alquilados) => {
        const valores=librosAlquilados[0].nombre;
        console.log("a",librosAlquilados[0].nombre);
        const fechaFinLabel = document.getElementById('lblAplazar');
        alert("Se aplazo la entrega 5 días");
        // Obtener la fecha de inicio
        const f_inicio_original = alquilados.fecha_fin;

        // Convertir la fecha al formato YYYY-MM-DD
        const partes_fecha = f_inicio_original.split('/');
        const f_inicio = `${partes_fecha[2]}-${partes_fecha[1]}-${partes_fecha[0]}`;

        // Crear un objeto Date a partir de la fecha en el nuevo formato
        const fecha_inicio_obj = new Date(f_inicio);
        alert("info: " +fecha_inicio_obj );
        fecha_inicio_obj.setDate(fecha_inicio_obj.getDate() + 5)
        alert("info2: " +fecha_inicio_obj );
        const fecha_inicio_obj2  = new Date(fecha_inicio_obj);
        const fecha_aplazada=fecha_inicio_obj2.toLocaleDateString();

        // Verificar si la fecha es válida
        if (isNaN(fecha_inicio_obj.getTime())) {
            console.error("La fecha de inicio proporcionada es inválida");
            return;
        }

        for (let i = 0; i < librosAlquilados.length; i++) {
            if (librosAlquilados[i].nombre === alquilados.nombre) {
                librosAlquilados[i].fechafin=fecha_aplazada;
                alert("La fecha de su entrega de aplazo 5 dias")
                //actualizarpag();
                forceUpdate();
            }
        }

    };

    const handlerEntregarLibro = (alquilados2) => {

        for (let i = 0; i < librosAlquilados.length; i++) {
            if (librosAlquilados[i].nombre === alquilados2.nombre) {
                librosAlquilados.splice(i, 1);
                alert("Gracias el libro fue devuelto");
                //actualizarpag();
                forceUpdate();
            }
        }
    };




    return (


        <div>
            <Header/>
            <div className="Contenedor-principal">
                <Contenedortituloalquilados/>

                <div className="Contenedor-principal-libros">
                    {librosAlquilados.map((restaurant, index) => (
                        <LibrosAlquilados
                            key={index}
                            nombre={restaurant.nombre}
                            autor={restaurant.autor}
                            aniopublicacion={restaurant.aniopublicacion}
                            isbn={restaurant.isbn}
                            imagen_portada={restaurant.imagen_portada}
                            sipnosis={restaurant.sipnosis}
                            critica={restaurant.critica}
                            fecha_inicio={restaurant.fechainicio}
                            fecha_fin={restaurant.fechafin}
                            onButtonClick={handlerAplazarentrega}
                            onButtonClick2={handlerEntregarLibro}

                        />
                    ))}

                </div>

            </div>
            <Footer/>
        </div>
    );
}