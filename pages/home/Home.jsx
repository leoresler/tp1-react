import "./Home.modules.css";

import { useEffect, useState } from "react";

import Buscador from "../../components/Buscador/Buscador";
import FormAgregarPeliculas from "../../components/FormAgregarPeliculas/FormAgregarPeliculas";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import Titulo from "../../components/Titulo/Titulo";
import peliculasData from "../../src/assets/peliculas";

function Home() {

  //const [peliculas, setPeliculas] = useState(peliculasData);
  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);

  // funcion que agrega una pelicula o serie
  const agregarPelicula = (pelicula) => {
    setPorVer([...porVer, pelicula]);
  };

  // funcion que elimina una pelicula o serie
  const eliminarItem = (id) => {
    const nuevoListaVideos = porVer.filter(video => video.id !== id); // general
    setPorVer(nuevoListaVideos);
  };

  // funcion que edita una pelicula o serie
  const editarItem = (id, nuevoTitulo, nuevoDirector, nuevoAño, nuevoGenero, nuevoRating, nuevoTipo) => {
    const nuevosVideos = porVer.map((video) =>
      video.id === id ? { ...video, id: id, titulo: nuevoTitulo, director: nuevoDirector, año: parseInt(nuevoAño), genero: nuevoGenero, tipo: nuevoTipo, rating: nuevoRating } : video
    );
    setPorVer(nuevosVideos);
  };

  // funcion que mueve una pelicula o serie a la lista Vistas
  const moverAVistas = (pelicula) => {
    setPorVer(porVer.filter((p) => p.id !== pelicula.id));
    setVistas([...vistas, pelicula]);
  };

  // funcion que mueve una pelicula o serie a la lista Por Ver
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

      <Buscador 
        peliculas={porVer} 
        agregarVista={moverAVistas} 
        editarItem={editarItem} 
        eliminarItem={eliminarItem}
        />

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
