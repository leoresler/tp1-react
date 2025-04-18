import "./Home.modules.css";
import { useState, useEffect } from "react";
import peliculasData from "../../src/assets/peliculas";
import Titulo from "../../components/Titulo/Titulo";
import FormAgregarPeliculas from "../../components/FormAgregarPeliculas/FormAgregarPeliculas";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";

function Home() {
  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);

  const agregarPelicula = (pelicula) => {
    setPorVer([...porVer, pelicula]);
  };

  const moverAVistas = (pelicula) => {
    setPorVer(porVer.filter((p) => p.id !== pelicula.id));
    setVistas([...vistas, pelicula]);
  };

  useEffect(() => {
    setPorVer(peliculasData);
  }, []);

  return (
    <>
      <Titulo textoTitulo="Videoclub" />

      <FormAgregarPeliculas onAgregar={agregarPelicula} />

      <Titulo textoTitulo="Películas y Series" />

      <ListaPeliculas
        titulo="Por ver"
        peliculas={porVer}
        agregarVista={moverAVistas}
      />

      <ListaPeliculas titulo="Vistas" peliculas={vistas} />
    </>
  );
}

export default Home;
