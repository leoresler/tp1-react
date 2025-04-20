import { BotonEditar, BotonEliminar, Button } from "../Button/Button";

import styles from "./Item.module.css";
import { useState } from 'react';

const Item = ({ pelicula, agregarVista, agregarPorVer, editarItem, eliminarItem }) => {

  // editar 
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(pelicula.titulo);
  const [directorEditado, setDirectorEditado] = useState(pelicula.director);
  const [añoEditado, setAñoEditado] = useState(pelicula.año);
  const [generoEditado, setGeneroEditado] = useState(pelicula.genero);
  const [ratingEditado, setRatingEditado] = useState(pelicula.rating);
  const [tipoEditado, setTipoEditado] = useState(pelicula.tipo);

  // funcion  que hacer setear los valores del formulario, al presionar "guardar"
  const handleGuardar = () => {
    editarItem(pelicula.id, tituloEditado, directorEditado, añoEditado, generoEditado, ratingEditado, tipoEditado);
    setModoEdicion(false);
  };

  // activar boton de editar
  const activarBoton = () => {
    setModoEdicion(true)
  }

  // variables de estados para poder usar en eliminar
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  // mostrar confirmacion de eliminar
  const confirmarEliminacion = (id) => {
    setIdAEliminar(id);
    setMostrarConfirmacion(true);
  };

  // aceptar eliminar
  const aceptarEliminacion = () => {
    eliminarItem(idAEliminar);
    setMostrarConfirmacion(false);
    setIdAEliminar(null);
  };

  // cancelar eliminar
  const cancelarEliminacion = () => {
    setMostrarConfirmacion(false);
    setIdAEliminar(null);
  };

  return (

    <div className={styles.item}>

      {modoEdicion ?
        (<div>
          <input value={tituloEditado} onChange={(e) => setTituloEditado(e.target.value)} />
          <input value={directorEditado} onChange={(e) => setDirectorEditado(e.target.value)} />
          <input value={añoEditado} onChange={(e) => setAñoEditado(e.target.value)} />
          <br />
          <select value={generoEditado} onChange={(e) => setGeneroEditado(e.target.value)}>
            <option value="Accion">Accion</option>
            <option value="Drama">Drama</option>
            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
            <option value="Aventura">Aventura</option>
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
            <option value="Documentales">Documentales</option>
            <option value="Romantica">Romantica</option>
          </select>
          <br />
          <input value={ratingEditado} onChange={(e) => setRatingEditado(e.target.value)} />

          {/* <input value={tipoEditado} onChange={(e) => setTipoEditado(e.target.value)} /> */}
          <select value={tipoEditado} onChange={(e) => setTipoEditado(e.target.value)}>
            <option value="Pelicula">Pelicula</option>
            <option value="Serie">Serie</option>
          </select>
          <br /><br />
          <button onClick={handleGuardar}>Guardar</button>
          <button onClick={() => setModoEdicion(false)}>Cancelar</button>
        </div>
        )
        :
        (<div>
          <h3>{pelicula.titulo}</h3>
          <p>{pelicula.director}</p>
          <p>{pelicula.año}</p>
          <p>{pelicula.genero}</p>
          <p>{pelicula.tipo}</p>
          <p>{pelicula.rating}</p>

          <div> {/* className={styles.buttonContainer} */}
            {agregarVista && (
              <>
                <Button
                  vista={agregarVista}
                  arreglo={pelicula}
                  nombre="Agregar a Vistas"
                />
                <BotonEditar 
                  nombre="Editar" 
                  funcion={activarBoton} 
                />              
                <BotonEliminar 
                  nombre="Eliminar" 
                  elemento={pelicula} 
                  funcion={confirmarEliminacion} 
                />
              </>
            )}

            {agregarPorVer && (
              <Button
                porVer={agregarPorVer}
                arreglo={pelicula}
                nombre="Agregar a Por Ver"
              />
            )}
          </div>
        </div>)
      }
      {mostrarConfirmacion && (
        <div className="modal-confirmacion">
          <p>¿Estas seguro de eliminar este item?</p>
          <button onClick={aceptarEliminacion}>Aceptar</button>
          <button onClick={cancelarEliminacion}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default Item;
