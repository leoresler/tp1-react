import { Button } from "../Button/Button";
import styles from "./Item.module.css";

const Item = ({ pelicula, agregarVista, agregarPorVer }) => {
  return (
    <div className={styles.item}>
      <h3>{pelicula.titulo}</h3>
      <p>{pelicula.director}</p>
      <p>{pelicula.año}</p>
      <p>{pelicula.genero}</p>
      <p>{pelicula.tipo}</p>
      <p>{pelicula.rating}</p>

      <div className={styles.buttonContainer}>
        {agregarVista && (
          <Button
            vista={agregarVista}
            arreglo={pelicula}
            nombre="Agregar a vistas"
          />
        )}

        {agregarPorVer && (
          <Button
            porVer={agregarPorVer}
            arreglo={pelicula}
            nombre="Agregar por ver"
          />
        )}
      </div>
    </div>
  );
};

export default Item;
