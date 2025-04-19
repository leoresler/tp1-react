import Item from "../Item/Item.jsx";
import styles from "./ItemList.module.css";

const ItemList = ({ peliculas, agregarVista, agregarPorVer, editarItem  }) => {
  return (
    <div className={styles.container}>
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          pelicula={pelicula}
          agregarVista={agregarVista}
          agregarPorVer={agregarPorVer}
          editarItem={editarItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
