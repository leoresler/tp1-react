import { useEffect, useState } from "react"

import ListaPeliculas from "../ListaPeliculas/ListaPeliculas";
import styles from "./Filtros.module.css";

const Flitros = ({ porVer, vistas, peliculas, agregarPorVer, agregarVista, editarItem, eliminarItem }) => {

  //filtros de localStorage o usar valores por defecto
  const [genero, setGenero] = useState(localStorage.getItem("filtroGenero") || "");
  const [tipo, setTipo] = useState(localStorage.getItem("filtroTipo") || "");
  const [rating, setRating] = useState(localStorage.getItem("filtroRating") || "");
  const [año, setAño] = useState(localStorage.getItem("filtroAño") || "");
  const [ordenAño, setOrdenAño] = useState(localStorage.getItem("filtroOrdenAño") || "");
  const [ordenRating, setOrdenRating] = useState(localStorage.getItem("filtroOrdenRating") || "");

  // Guardar en localStorage cuando cambien los filtros
  useEffect(() => {
    localStorage.setItem("filtroGenero", genero);
    localStorage.setItem("filtroTipo", tipo);
    localStorage.setItem("filtroRating", rating);
    localStorage.setItem("filtroAño", año);
    localStorage.setItem("filtroOrdenAño", ordenAño);
    localStorage.setItem("filtroOrdenRating", ordenRating);
  }, [genero, tipo, rating, año, ordenAño, ordenRating]);
  
  const peliculasFiltradas = peliculas.filter((dato) => {
    const coincideGenero = genero ? dato.genero === genero : true;
    const coincideTipo = tipo ? dato.tipo === tipo : true;
    const coincideRating = rating ? dato.rating === rating : true;
    const coincideAño = año ? dato.año === año : true;
    return coincideGenero && coincideTipo && coincideRating && coincideAño;
  });

  // Ordenar por año si se seleccionó
  if (ordenAño === "asc") {
    peliculasFiltradas.sort((a, b) => parseInt(a.año) - parseInt(b.año));
  } else if (ordenAño === "desc") {
    peliculasFiltradas.sort((a, b) => parseInt(b.año) - parseInt(a.año));
  }

  // Luego ordenar por rating si se seleccionó
  if (ordenRating === "asc") {
    peliculasFiltradas.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
  } else if (ordenRating === "desc") {
    peliculasFiltradas.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }

  const filtrosActivos = genero !== "" || tipo !== "" || rating !== "" || año !== "" || ordenAño !== "" || ordenRating !== "";

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

        <input type="text" value={año} onChange={(e) => setAño(e.target.value)} placeholder="Ingrese un año..." />

        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Ingrese un rating..." />

        <select value={ordenAño} onChange={(e) => setOrdenAño(e.target.value)}>
          <option value="">Ordenar por Año</option>
          <option value="asc">Año Ascendente</option>
          <option value="desc">Año Descendente</option>
        </select>

        <select value={ordenRating} onChange={(e) => setOrdenRating(e.target.value)}>
          <option value="">Ordenar por Rating</option>
          <option value="asc">Rating Ascendente</option>
          <option value="desc">Rating Descendente</option>
        </select>
      </div>

      <div className={styles.divBusqueda}>
        {filtrosActivos ? (
          <>
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
            <ListaPeliculas
              titulo="Por ver"
              porVer={porVer}
              vistas={vistas}
              peliculas={porVer}
              agregarVista={agregarVista}
              editarItem={editarItem}
              eliminarItem={eliminarItem}
            />
            <ListaPeliculas
              titulo="Vistas"
              porVer={porVer}
              vistas={vistas}
              peliculas={vistas}
              agregarPorVer={agregarPorVer}
            />
          </>
        ) : (
          <>
            <ListaPeliculas
              titulo="Por ver"
              porVer={porVer}
              vistas={vistas}
              peliculas={porVer}
              agregarVista={agregarVista}
              editarItem={editarItem}
              eliminarItem={eliminarItem}
            />
            <ListaPeliculas
              titulo="Vistas"
              porVer={porVer}
              vistas={vistas}
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