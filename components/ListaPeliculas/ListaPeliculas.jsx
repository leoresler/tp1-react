import ItemList from "../ItemList/ItemList";
import SubTitulos from "../Titulo/SubTitulos";
import styles from "./ListaPeliculas.module.css";

("./traerPeliculas.js");

const ListaPeliculas = ({
  titulo,
  porVer,
  vistas,
  peliculas,
  agregarPorVer,
  agregarVista,
  editarItem,
  eliminarItem,
}) => {
  return (
    <>
      <SubTitulos textoSubTitulo={titulo} />
      <div className={styles.contador}>
        <p>Cantidad de películas y series: {peliculas.length}</p>
      </div>

      {peliculas.length > 0 ? (
        <ItemList
          porVer={porVer}
          vistas={vistas}
          peliculas={peliculas}
          agregarPorVer={agregarPorVer}
          agregarVista={agregarVista}
          editarItem={editarItem}
          eliminarItem={eliminarItem}
        />
      ) : (
        <h3>No hay elementos en esta lista</h3>
      )}
    </>
  );
};

export default ListaPeliculas;
