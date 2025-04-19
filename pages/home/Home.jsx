import "./Home.modules.css";

import { useEffect, useState } from "react";

import FormAgregarPeliculas from "../../components/FormAgregarPeliculas/FormAgregarPeliculas";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import Titulo from "../../components/Titulo/Titulo";
import peliculasData from "../../src/assets/peliculas";

function Home() {
  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);

  const agregarPelicula = (pelicula) => {
    setPorVer([...porVer, pelicula]);
  };

  // funcion que elimina un item de la lista general
  const eliminarItem = (id) => {
    const nuevoListaVideos = porVer.filter(video => video.id !== id); // general
    setPorVer(nuevoListaVideos);
  };

  const editarItem = (id, nuevoTitulo, nuevoDirector, nuevoAño, nuevoGenero, nuevoRating, nuevoTipo) => {
    const nuevosVideos = porVer.map((video) =>
      video.id === id ? { ...video, id: id, titulo: nuevoTitulo, director: nuevoDirector, año: parseInt(nuevoAño), genero: nuevoGenero, tipo: nuevoTipo, rating: nuevoRating } : video
    );
    setPorVer(nuevosVideos);
  };

  const moverAVistas = (pelicula) => {
    setPorVer(porVer.filter((p) => p.id !== pelicula.id));
    setVistas([...vistas, pelicula]);
  };

  const moverAPorVer = (pelicula) => {
    setVistas(vistas.filter((p) => p.id !== pelicula.id));
    setPorVer([...porVer, pelicula]);
  };

  useEffect(() => {
    setPorVer(peliculasData);
  }, []);

  return (
    <>
      <Titulo textoTitulo="Videoclub" />

      <FormAgregarPeliculas onAgregar={agregarPelicula} />

      {/* <Titulo textoTitulo="Películas y Series" /> */}

      <ListaPeliculas
        titulo="Por ver"
        peliculas={porVer}
        agregarVista={moverAVistas}
        editarItem={editarItem}
        eliminarItem={eliminarItem}
      />

      {/* <ListaPeliculas titulo="Vistas" peliculas={vistas} /> */}
      <ListaPeliculas
        titulo="Vistas"
        peliculas={vistas}
        agregarPorVer={moverAPorVer}
      />
    </>
  );
}

export default Home;
