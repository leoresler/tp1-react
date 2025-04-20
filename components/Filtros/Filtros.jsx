import ListaPeliculas from "../ListaPeliculas/ListaPeliculas";
import styles from "./Filtros.module.css";
import { useState } from "react"

// funcion que retorna un nuevo arreglo d elista de peliculas y series. (aparecen los items de la lista Por Ver)
function mostrarVideosSeriesNoRepetidas(peliculas, listVistas) {
  return peliculas.filter(
    (pelicula) => !listVistas.some((vista) => vista.id === pelicula.id)
  );
}

const Flitros = ({ porVer, vistas, agregarPorVer, agregarVista, editarItem, peliculas, eliminarItem }) => {

  const [genero, setGenero] = useState("");
  const [tipo, setTipo] = useState("");

  const peliculasFiltradas = peliculas.filter((dato) => {
    const coincideGenero = genero ? dato.genero === genero : true;
    const coincideTipo = tipo ? dato.tipo === tipo : true;
    return coincideGenero && coincideTipo;
  });

  const filtrosActivos = genero !== "" || tipo !== "";

  return (
    <div className={styles.divFiltros}>

      <div>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Seleccionar genero:</option>
          <option value="Acción">Accion</option>
          <option value="Drama">Drama</option>
          <option value="Ciencia Ficcion">Ciencia Ficcion</option>
          <option value="Aventura">Aventura</option>
          <option value="Terror">Terror</option>
          <option value="Comedia">Comedia</option>
          <option value="Documentales">Documentales</option>
          <option value="Romantica">Romantica</option>
        </select>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Seleccionar tipo: </option>
          <option value="Pelicula">Pelicula</option>
          <option value="Serie">Serie</option>
        </select>
      </div>

      <div className={styles.divBusqueda}>
        {filtrosActivos ? (
          <>
            <ListaPeliculas
              titulo="Resultados de búsqueda:"
              peliculas={mostrarVideosSeriesNoRepetidas(peliculasFiltradas, vistas)} // solo las peliculas de la lista Por Ver
              agregarVista={agregarVista}
              editarItem={editarItem}
              eliminarItem={eliminarItem}
            />
            <ListaPeliculas
              titulo="Vistas"
              peliculas={vistas}
              agregarPorVer={agregarPorVer}
            />
          </>
        ) : (
          <>
            <ListaPeliculas
              titulo="Por ver"
              peliculas={porVer}
              agregarVista={agregarVista}
              editarItem={editarItem}
              eliminarItem={eliminarItem}
            />
            <ListaPeliculas
              titulo="Vistas"
              peliculas={vistas}
              agregarPorVer={agregarPorVer}
            />
          </>
        )}
      </div>

    </div>
  )
}

export default Flitros