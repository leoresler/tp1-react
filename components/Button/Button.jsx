import  styles from './Button.module.css';
//import { useState } from 'react';



export const Button = ({onBuscar, resultado,setBusqueda}) => {

  const handleClick = () => {
    onBuscar();          // Ejecuta la búsqueda
    setBusqueda('');     // Limpia el campo del input
  };

  return (

    <>
  
    <button className={styles.buttonBuscador} onClick={handleClick}>Buscar</button>
    <p>{resultado}</p>
    </>


  )
};
