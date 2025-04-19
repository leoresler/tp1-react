import { useEffect, useState } from "react";

import ListaPeliculas from "../ListaPeliculas/ListaPeliculas.jsx";
import styles from "./Buscador.module.css";

//import ItemListContainer from "../../../../mi-app-react/src/componentes/ItemListContainer/ItemListContainer.jsx";
//import data from "../../../../mi-app-react/src/data/datos.json";//datos de mi json(arreglo de peliculas)
//import peliculasData from "../../src/assets/peliculas";

const Buscador = ({ peliculas, agregarVista,
  editarItem, eliminarItem }) => {
  const [busqueda, setBusqueda] = useState("");
  //const [peliculas, setPeliculas] = useState(peliculasData);

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
            peliculas={peliculasFiltradas}
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
