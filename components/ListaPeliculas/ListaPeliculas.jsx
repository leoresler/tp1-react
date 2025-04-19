import ItemList from "../ItemList/ItemList";
import SubTitulos from "../Titulo/SubTitulos";
import styles from "./ListaPeliculas.module.css";

("./traerPeliculas.js");



const ListaPeliculas = ({ titulo, peliculas, agregarVista, agregarPorVer, editarItem }) => {
  return (
    <>
      <SubTitulos textoSubTitulo={titulo} /> ({peliculas.length})
      {peliculas.length > 0 ? (
        <ItemList
          peliculas={peliculas}
          agregarVista={agregarVista}
          agregarPorVer={agregarPorVer}
          editarItem={editarItem}
        />
      ) : (
        <h3>No hay elementos en esta lista</h3>
      )}
    </>
  );
};


export default ListaPeliculas;
