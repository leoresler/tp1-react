import Item from "../Item/Item.jsx";
import styles from "./ItemList.module.css";

const ItemList = ({ peliculas, agregarVista, agregarPorVer  }) => {
  return (
    <div className={styles.container}>
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          pelicula={pelicula}
          agregarVista={agregarVista}
          agregarPorVer={agregarPorVer}
        />
      ))}
    </div>
  );
};

export default ItemList;
