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
    const actualizarpaginita = UseActualizacion();


    //Para actualizar el estado de los libros alquilados cuando cambia el contexto de los libros (librosAlquilados).
    useEffect(() => {
        setAlquilados(librosAlquilados);
    }, [librosAlquilados]);

    useEffect(() => {
        console.log("hola");
    });

    useEffect(() => {
        setAlquilados(librosAlquilados);
        console.log("libros alquilados" , librosAlquilados)
    });

    console.log(librosAlquilados);




    const handlerAplazarentrega = (alquilados) => {
        const valores=librosAlquilados[0].nombre;
        console.log("a",librosAlquilados[0].nombre);
        const fechaFinLabel = document.getElementById('lblAplazar');

        // Obtener la fecha de inicio
        const f_inicio_original = alquilados.fecha_fin;

        // Convertir la fecha al formato YYYY-MM-DD
        const partes_fecha = f_inicio_original.split('/');
        const f_inicio = `${partes_fecha[2]}-${partes_fecha[1]}-${partes_fecha[0]}`;

        // Crear un objeto Date a partir de la fecha en el nuevo formato
        const fecha_inicio_obj = new Date(f_inicio);
        fecha_inicio_obj.setDate(fecha_inicio_obj.getDate() + 5)
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
                setAlquilados(librosAlquilados);
                alert("La fecha de su entrega se aplazo 5 dias")
                //actualizarpag();
                actualizarpaginita();
            }
        }

    };

    const handlerEntregarLibro = (alquilados2) => {

        for (let i = 0; i < librosAlquilados.length; i++) {
            if (librosAlquilados[i].nombre === alquilados2.nombre) {
                librosAlquilados.splice(i, 1);
                alert("Gracias el libro fue devuelto");
                console.log("libros alquilados" , librosAlquilados)
                setAlquilados(librosAlquilados);
                //actualizarpag();
                actualizarpaginita();
            }
        }
    };




    return (


        <div>
            <Header/>
            <div className="Contenedor-principal">
                <Contenedortituloalquilados/>

                <div className="Contenedor-principal-libros">
                    {librosAlquilados.map((libritoalqui, index) => (
                        <LibrosAlquilados
                            key={index}
                            nombre={libritoalqui.nombre}
                            autor={libritoalqui.autor}
                            aniopublicacion={libritoalqui.aniopublicacion}
                            isbn={libritoalqui.isbn}
                            imagen_portada={libritoalqui.imagen_portada}
                            sipnosis={libritoalqui.sipnosis}
                            critica={libritoalqui.critica}
                            fecha_inicio={libritoalqui.fechainicio}
                            fecha_fin={libritoalqui.fechafin}
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