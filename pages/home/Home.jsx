import { useEffect, useState } from "react";

import Buscador from "../../components/Buscador/Buscador";
import Filtros from "../../components/Filtros/Filtros";
import MostrarFormulario from "../../components/MostrarFormulario/MostrarFormulario";
import Titulo from "../../components/Titulo/Titulo";
import logoCamara from "../../src/assets/logo/logoCamara.png"
import styles from "./Home.module.css";

//import logoNeon from "../../src/assets/logo/logoNeon.png"



// import peliculasData from "../../src/assets/peliculas";

function Home() {
  // Cargar datos desde localStorage al montar o un array vacio
  const porVerGuardadas = JSON.parse(localStorage.getItem("porVer")) || [];
  const vistasGuardadas = JSON.parse(localStorage.getItem("vistas")) || [];

  //const [peliculas, setPeliculas] = useState(peliculasData);
  const [porVer, setPorVer] = useState(porVerGuardadas);
  const [vistas, setVistas] = useState(vistasGuardadas);

  // Guardar en localStorage cada vez que cambian porVer o vistas
  useEffect(() => {
    localStorage.setItem("porVer", JSON.stringify(porVer));
    localStorage.setItem("vistas", JSON.stringify(vistas));
  }, [porVer, vistas]);

  // funcion que agrega una pelicula o serie
  const agregarPelicula = (pelicula) => {
    setPorVer([...porVer, pelicula]);
  };

  // funcion que elimina una pelicula o serie
  const eliminarItem = (id) => {
    const nuevoListaVideos = porVer.filter((video) => video.id !== id); // general
    setPorVer(nuevoListaVideos);
  };

  // funcion que edita una pelicula o serie
  const editarItem = (
    id,
    nuevoTitulo,
    nuevoDirector,
    nuevoAño,
    nuevoGenero,
    nuevoRating,
    nuevoTipo
  ) => {
    const nuevosVideos = porVer.map((video) =>
      video.id === id
        ? {
          ...video,
          id: id,
          titulo: nuevoTitulo,
          director: nuevoDirector,
          año: nuevoAño,
          genero: nuevoGenero,
          tipo: nuevoTipo,
          rating: nuevoRating,
        }
        : video
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

  return (
    <>
      <div className={styles.containerHeader}>
        
        <div className={styles.supHeader}>
          <img src={logoCamara} alt="Logo de Video Club del Comahue" className={styles.logo}/>
          <Titulo textoTitulo="Video Club Del Comahue" />
        </div>
        
        <br />

        <header className={styles.headerContainer}>

        <MostrarFormulario onAgregar={agregarPelicula} />
          {/* <div className={styles.infHeader}></div> */}

          <Buscador
            porVer={porVer}
            vistas={vistas}
            peliculas={[...porVer, ...vistas]}
            agregarPorVer={moverAPorVer}
            agregarVista={moverAVistas}
            editarItem={editarItem}
            eliminarItem={eliminarItem}
          />
          
        </header>
        
      </div>

      <main className={styles.mainContainer}>
        <Filtros
          porVer={porVer}
          vistas={vistas}
          peliculas={[...porVer, ...vistas]}
          agregarPorVer={moverAPorVer}
          agregarVista={moverAVistas}
          editarItem={editarItem}
          eliminarItem={eliminarItem}
        />
      </main>
    </>
  );
}

export default Home;
