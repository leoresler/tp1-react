import './Home.modules.css';
import { useState,useEffect } from 'react';
import { Titulo }  from '../../components/Titulo/Titulo.jsx/'; // cuando se exporta sin default, va entre llaves el componente
import { Button } from '../../components/Button/Button.jsx';
import { Buscador } from '../../components/Buscador/Buscador.jsx';
import FormularioPelicula from '../../components/FormularioPelicula/FormularioPelicula.jsx';


const peliculas = [
    {
      id: 1,
      titulo: "El Señor de los Anillos",
      genero: "Fantasía",
      año: 2001
    },
    {
      id: 2,
      titulo: "Volver al Futuro",
      genero: "Ciencia Ficción",
      año: 1985
    },
    {
      id: 3,
      titulo: "Matrix",
      genero: "Acción",
      año: 1999
    }
  ];
  //console.log(peliculas)

  function Home() {
    const nombre = "Bienvenido al Videoclub";
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState('');

    const [peliculas, setPeliculas] = useState(() => {
      const guardadas = localStorage.getItem('peliculas');
      return guardadas ? JSON.parse(guardadas) : [];
    });

    useEffect(() => {
      //console.log('Películas actualizadas:', peliculas); 
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }, [peliculas]);

    const agregarPelicula = (nuevaPelicula) => {
      setPeliculas([...peliculas, nuevaPelicula]);
    };
  
  
    const buscarPelicula = () => {
      const encontrada = peliculas.find(p => 
        p.titulo.toLowerCase() === busqueda.toLowerCase()
      );
  
      if (encontrada) {
        setResultado(`🎬 ${encontrada.titulo} - ${encontrada.genero} (${encontrada.año})`);
      } else {
        setResultado("- No hay ninguna película");
      }
    };


  
    return (
      <>
        <Titulo texto={nombre} />

        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

        <Button onBuscar={buscarPelicula} resultado={resultado} setBusqueda={setBusqueda}  />

        <FormularioPelicula onAgregar={agregarPelicula} />
        
      </>
    );
  };
  

export default Home