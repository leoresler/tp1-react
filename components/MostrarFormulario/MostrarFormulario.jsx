import { useState } from "react"
import FormAgregarPeliculas from "../FormAgregarPeliculas/FormAgregarPeliculas";
import styles from "./MostrarFormulario.module.css"
import { FaPlus } from "react-icons/fa";


 const MostrarFormulario = ({onAgregar}) => {


    const [mostrar,setMostrar] = useState(true);


    function handleOnClick () {

        setMostrar(!mostrar);


    }


  return (


    <div className={styles.divAgregarPelicula}>
        <br />
        <button onClick={handleOnClick}>{mostrar ? " ➖ Ocultar Agregar Pelicula" : "➕Agregar Pelicula" }</button> 
         {/* si mostras es verdadero, muestra el h2 */}
         {mostrar  &&  <FormAgregarPeliculas onAgregar = {onAgregar}/>}
         {/**Se podria hacer con un operador ternario
          * mostrar ?  <h2> Hola mundo<h2/> : <h2> <h2/> 
          */}
        
    </div>
  )
}


export default MostrarFormulario