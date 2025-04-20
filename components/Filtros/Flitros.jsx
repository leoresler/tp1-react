import { useState } from "react"
import ListaPeliculas from "../ListaPeliculas/ListaPeliculas";
import styles from "./Filtros.module.css";


const Flitros = ({porVer,vistas,agregarPorVer,agregarVista,editarItem,peliculas,eliminarItem}) => {
    console.log(porVer);
    console.log(vistas);


    const [genero,setGenero] = useState("");
    const [tipo,setTipo] = useState("");

    const peliculasFiltradas = peliculas.filter((dato) => {
        const coincideGenero = genero ? dato.genero === genero : true;
        const coincideTipo = tipo ? dato.tipo === tipo : true;
        return coincideGenero && coincideTipo;
      });
      

    const filtrosActivos = genero !== "" || tipo !== "";

  return (

    <div className={styles.divFiltros}> 
       <div>
        <select value={genero} onChange={(e)=>setGenero(e.target.value)}>
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
        <select value={tipo} onChange={(e)=>setTipo(e.target.value)}>
            <option value="">Seleccionar tipo: </option>
            <option value="Pelicula">Pelicula</option>
            <option value="Serie">Serie</option>
            
        </select>
      </div>
      <div className={styles.divBusqueda}>

        {filtrosActivos ? (
          <ListaPeliculas
            titulo="Resultados de búsqueda:"
            peliculas={peliculasFiltradas}
            
          />

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
        editarItem={editarItem}
        eliminarItem={eliminarItem}
      />
      </>
        )}
    </div>
  </div>
    

  )
}

export default Flitros