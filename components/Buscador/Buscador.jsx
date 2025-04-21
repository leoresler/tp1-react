import ListaPeliculas from "../ListaPeliculas/ListaPeliculas.jsx";
import styles from "./Buscador.module.css";
import { useState } from "react";

const Buscador = ({ porVer, vistas, peliculas, agregarPorVer, agregarVista, editarItem, eliminarItem }) => {
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
          Buscar películas o series
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
            titulo="Resultados de búsqueda:"
            porVer={porVer}
            vistas={vistas}
            peliculas={peliculasFiltradas}
            agregarPorVer={agregarPorVer}
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
