import { BotonEditar, BotonEliminar, Button } from "../Button/Button";

import styles from "./Item.module.css";
import { useState } from 'react';

const Item = ({ porVer, vistas, pelicula, agregarPorVer, agregarVista, editarItem, eliminarItem }) => {

  // verifica si esta en lista por ver o vistas
  const estaEnPorVer = porVer?.some(item => item.id === pelicula.id);
  const estaEnVistas = vistas?.some(item => item.id === pelicula.id);

  // editar 
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(pelicula.titulo);
  const [directorEditado, setDirectorEditado] = useState(pelicula.director);
  const [añoEditado, setAñoEditado] = useState(pelicula.año);
  const [generoEditado, setGeneroEditado] = useState(pelicula.genero);
  const [ratingEditado, setRatingEditado] = useState(pelicula.rating);
  const [tipoEditado, setTipoEditado] = useState(pelicula.tipo);
  const generos = [
    "Accion",
    "Drama",
    "Ciencia Ficcion",
    "Aventura",
    "Terror",
    "Comedia",
    "Documentales",
    "Romantica"
  ];

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
        (
          <div>
            <input value={tituloEditado} onChange={(e) => setTituloEditado(e.target.value)} />
            <input value={directorEditado} onChange={(e) => setDirectorEditado(e.target.value)} />
            <input value={añoEditado} onChange={(e) => setAñoEditado(e.target.value)} />
            <br />
            <select value={generoEditado} onChange={(e) => setGeneroEditado(e.target.value)}>
              <option value={generoEditado}>{generoEditado}</option>
              {generos
                .filter((genero) => genero !== generoEditado)
                .map((genero) => (
                  <option key={genero} value={genero}>
                    {genero}
                  </option>
                ))}
            </select>
            <br />
            <input value={ratingEditado} onChange={(e) => setRatingEditado(e.target.value)} />

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

            {!estaEnVistas && (
              <>
                <Button
                  vista={agregarVista}
                  arreglo={pelicula}
                  nombre="Agregar a Vistas"
                />
                {editarItem && ( // verifica si tiene la propiedad editarItem (si lo tiene, lo muestra)
                  <BotonEditar
                    nombre="Editar"
                    funcion={activarBoton}
                  />
                )}
                {eliminarItem && ( // verifica si tiene la propiedad eliminarItem (si lo tiene, lo muestra)
                  <BotonEliminar
                    nombre="Eliminar"
                    elemento={pelicula}
                    funcion={confirmarEliminacion}
                  />
                )}
              </>
            )}

            {!estaEnPorVer && (
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
        <div className={styles.confirmacionModal}>
          <p>¿Estas seguro de eliminar este item?</p>
          <button onClick={aceptarEliminacion}>Aceptar</button>
          <button onClick={cancelarEliminacion}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default Item;
