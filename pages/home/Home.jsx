import "./Home.modules.css";

import { useEffect, useState } from "react";

import FormAgregarPeliculas from "../../components/FormAgregarPeliculas/FormAgregarPeliculas";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import Titulo from "../../components/Titulo/Titulo";
import peliculasData from "../../src/assets/peliculas";
import Buscador from "../../components/Buscador/Buscador";

function Home() {

  const [peliculas, setPeliculas] = useState(peliculasData);



  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);

  const agregarPelicula = (pelicula) => {
    setPorVer([...porVer, pelicula]);
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

  const editarItem = (id, nuevoTitulo, nuevoDirector, nuevoAño, nuevoGenero, nuevoRating, nuevoTipo) => {
    const nuevosVideos = porVer.map((video) =>
      video.id === id ? { ...video, id: id, titulo: nuevoTitulo, director: nuevoDirector, año: parseInt(nuevoAño), genero: nuevoGenero, tipo: nuevoTipo, rating: nuevoRating } : video
    );
    setPorVer(nuevosVideos);
  };

  return (
    <>
      <Titulo textoTitulo="Videoclub" />

      <FormAgregarPeliculas onAgregar={agregarPelicula} />

      {/* <Titulo textoTitulo="Películas y Series" /> */}

      <Buscador peliculas={peliculas} agregarVista={moverAVistas}
        editarItem={editarItem} />



      <ListaPeliculas
        titulo="Por ver"
        peliculas={porVer}
        agregarVista={moverAVistas}
        editarItem={editarItem}
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
