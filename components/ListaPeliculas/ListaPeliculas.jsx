import styles from "./ListaPeliculas.module.css";
("./traerPeliculas.js");
import ItemList from "../ItemList/ItemList";
import SubTitulos from "../Titulo/SubTitulos";

const ListaPeliculas = ({ titulo, peliculas, agregarPorVer, agregarVista }) => {

  return (
    <>
      <SubTitulos textoSubTitulo={titulo} /> ({peliculas.length})
      {peliculas.length > 0 ? (
        <ItemList
          peliculas={peliculas}
          agregarPorVer={titulo === "Películas y Series" ? agregarPorVer : null}
          agregarVista={titulo === "Películas y Series" ? agregarVista : null}
        />
      ) : (
        <h3>No hay elementos en esta lista</h3>
      )}
    </>
  );
};

export default ListaPeliculas;
