import { Button } from "../Button/Button";
import styles from "./Item.module.css";

const Item = ({ pelicula, agregarPorVer, agregarVista }) => {
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
          <div>
            <Button
              vista={agregarVista}
              arreglo={pelicula}
              nombre="Agregar a vista"
            />
            <Button
              porVer={agregarPorVer}
              arreglo={pelicula}
              nombre="Agregar a por ver"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
