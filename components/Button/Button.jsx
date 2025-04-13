import './Button.module.css';
//import { useState } from 'react';



export const Button = ({onBuscar, resultado}) => {

  return (

    <>
  
    <button onClick={onBuscar}>Buscar</button>
    <p>{resultado}</p>
    </>


  )
};
