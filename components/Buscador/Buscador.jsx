import ListaPeliculas from "../ListaPeliculas/ListaPeliculas.jsx";
import styles from "./Buscador.module.css";
import { useState } from "react";

// funcion que retorna un nuevo arreglo de lista de peliculas y series. (aparecen los items de la lista Por Ver)
function mostrarVideosSeriesNoRepetidas(peliculas, listVistas) {
  return peliculas.filter(
    (pelicula) => !listVistas.some((vista) => vista.id === pelicula.id)
  );
}

const Buscador = ({ porVer, vistas, peliculas, agregarVista, editarItem, eliminarItem }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscarPelicula = (e) => {
    setBusqueda(e.target.value);
  };

  const peliculasFiltradas = busqueda.trim()
    ? peliculas.filter((dato) =>
      dato.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.director.toLowerCase().includes(busqueda.toLowerCase())
    )
    : peliculas;

  //console.log(peliculasFiltradas);

  return (
    <>
      <div className={styles.divBuscador}>
        <label className={styles.labelBuscador} htmlFor="busqueda">
          Buscador de Películas
        </label>
        <input
          className={styles.inputBuscador}
          id="busqueda"
          type="text"
          placeholder="Ingresá el título o director..."
          value={busqueda}
          onChange={buscarPelicula}
        />
      </div>
      <div className={styles.divBusqueda}>

        {busqueda && (
          <ListaPeliculas
            titulo="Resultados de búsqueda"
            //peliculas={peliculasFiltradas}
            peliculas={mostrarVideosSeriesNoRepetidas(peliculasFiltradas, vistas)}
            agregarVista={agregarVista}
            editarItem={editarItem}
            eliminarItem={eliminarItem}
          />
        )}
      </div>
    </>
  );
};

export default Buscador;
