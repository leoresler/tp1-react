import "./Home.modules.css";
import { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo.jsx/"; // cuando se exporta sin default, va entre llaves el componente
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas.jsx";
import peliculasData from "../../src/assets/peliculas";


function Home() {
  // const nombre = "Bienvenido al Videoclub";
  // const [busqueda, setBusqueda] = useState("");
  // const [resultado, setResultado] = useState("");

  // const [peliculas, setPeliculas] = useState(() => {
  //   const guardadas = localStorage.getItem("peliculas");
  //   return guardadas ? JSON.parse(guardadas) : [];
  // });

  // useEffect(() => {
  //   //console.log('Películas actualizadas:', peliculas);
  //   localStorage.setItem("peliculas", JSON.stringify(peliculas));
  // }, [peliculas]);

  // const agregarPelicula = (nuevaPelicula) => {
  //   setPeliculas([...peliculas, nuevaPelicula]);
  // };

  // const buscarPelicula = () => {
  //   const encontrada = peliculas.find(
  //     (p) => p.titulo.toLowerCase() === busqueda.toLowerCase()
  //   );

  //   if (encontrada) {
  //     setResultado(
  //       `🎬 ${encontrada.titulo} - ${encontrada.genero} (${encontrada.año})`
  //     );
  //   } else {
  //     setResultado("- No hay ninguna película");
  //   }
  // };

  const [peliculas, setPeliculas] = useState([]);
  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);

  const moverAPorVer = (pelicula) => {
    setPeliculas(peliculas.filter((p) => p.id !== pelicula.id));
    setPorVer([...porVer, pelicula]);
  };

  const moverAVistas = (pelicula) => {
    // si viene de "por ver"
    if (porVer.some((p) => p.id === pelicula.id)) {
      setPorVer(porVer.filter((p) => p.id !== pelicula.id));
    } else {
      // si viene de la lista principal
      setPeliculas(peliculas.filter((p) => p.id !== pelicula.id));
    }
    setVistas([...vistas, pelicula]);
  };

  useEffect(() => {
    setPeliculas(peliculasData);
  }, []);

  return (
    <>
      {/* <FormularioPelicula onAgregar={agregarPelicula} />*/}

      <Titulo textoTitulo="Videoclub" />

      <ListaPeliculas
        titulo="Películas y Series"
        peliculas={peliculas}
        agregarPorVer={moverAPorVer}
        agregarVista={moverAVistas}
      />

      <ListaPeliculas titulo="Vistas" peliculas={vistas} />
      <ListaPeliculas titulo="Por ver" peliculas={porVer} />
    </>
  );
}

export default Home;
