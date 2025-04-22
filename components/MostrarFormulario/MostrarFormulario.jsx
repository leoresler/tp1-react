import FormAgregarPeliculas from "../FormAgregarPeliculas/FormAgregarPeliculas";
import styles from "./MostrarFormulario.module.css"
import { useState } from "react"

const MostrarFormulario = ({ onAgregar }) => {

  const [mostrar, setMostrar] = useState(false);

  function handleOnClick() {
    setMostrar(!mostrar);
  }

  return (

    <div >      
      <div className={styles.fila}>
        <p>Agregá tus películas o series favoritas</p>
        <button className={styles.buttonAgregar} onClick={handleOnClick}>
          {mostrar ? "➖ Ocultar" : "➕ Agregar"}
        </button>
      </div>

      {mostrar && (
        <div className={styles.formWrapper}>
          <FormAgregarPeliculas onAgregar={onAgregar} />
        </div>
      )}
    </div>
  );
}


export default MostrarFormulario