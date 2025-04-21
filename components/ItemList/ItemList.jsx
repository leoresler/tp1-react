import Item from "../Item/Item.jsx";
import styles from "./ItemList.module.css";

const ItemList = ({ porVer, vistas, peliculas, agregarPorVer, agregarVista, editarItem, eliminarItem  }) => {
  return (
    <div className={styles.container}>
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          porVer={porVer} 
          vistas={vistas} 
          pelicula={pelicula}
          agregarPorVer={agregarPorVer}
          agregarVista={agregarVista}          
          editarItem={editarItem}
          eliminarItem={eliminarItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
