import Item from "../Item/Item.jsx";
import styles from "./ItemList.module.css";

const ItemList = ({ peliculas, agregarVista, agregarPorVer, editarItem, eliminarItem  }) => {
  return (
    <div className={styles.container}>
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          pelicula={pelicula}
          agregarVista={agregarVista}
          agregarPorVer={agregarPorVer}
          editarItem={editarItem}
          eliminarItem={eliminarItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
