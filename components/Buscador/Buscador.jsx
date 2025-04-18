import { useState, useEffect } from "react";
import styles from "./Buscador.module.css";
import ItemListContainer from "../../../../mi-app-react/src/componentes/ItemListContainer/ItemListContainer.jsx";
import data from "../../../../mi-app-react/src/data/datos.json";//datos de mi json(arreglo de peliculas)

const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const buscarPelicula = (e) => {
    setBusqueda(e.target.value);
  };

  const pedirPeliculas = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    pedirPeliculas().then((resp) => {
      setPeliculas(resp);
    });
  }, []);

  const peliculasAMostrar = busqueda.trim()
    ? peliculas.filter((dato) =>
        dato.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.director.toLowerCase().includes(busqueda.toLowerCase())
      )
    : peliculas;

  return (
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
      <ItemListContainer peliculas={peliculasAMostrar} />
    </div>
  );
};

export default Buscador;
