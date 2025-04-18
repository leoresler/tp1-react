import styles from "./ItemList.module.css";
import Item from "../Item/Item.jsx";

const ItemList = ({ peliculas, agregarPorVer, agregarVista }) => {
  return (
    <div className={styles.container}>
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          pelicula={pelicula}
          agregarPorVer={agregarPorVer}
          agregarVista={agregarVista}
        />
      ))}
    </div>
  );
};

export default ItemList;
