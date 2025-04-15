import { useState } from "react";
import { Titulo }  from '../Titulo/Titulo.jsx'
import styles from "./FormularioPelicula.module.css"



const FormularioPelicula = ({ onAgregar }) => {

  const [titulo, setTitulo] = useState('');
  const [director, setDirector] = useState('');
  const [anio, setAnio] = useState('');
  const [tipo, setTipo] = useState('');
  const [genero, setGenero] = useState('');
  const [estadoVista, setEstadoVista] = useState('noVista');

  const handleSubmit = (e) => {
    e.preventDefault();
  



  const nuevaPelicula = {
    id: crypto.randomUUID(), // Genera un ID único
    titulo,
    director,
    año: parseInt(anio),
    tipo,
    genero,
    vista: false // por defecto, va a la lista "por ver"
  };

  // Llamamos a la función que nos pasó el padre
  onAgregar(nuevaPelicula);

  setTitulo('');
  setDirector('');
  setAnio('');
  setTipo('');
  setGenero('');
  setDisponible('');


};


  return (
    <div>
        <Titulo texto = "Agregar Pelicula"></Titulo>
       <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Titulo:</label><br/>
        <input type="text" id="titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)} placeholder='Escriba aqui...' required/><br />
        <label htmlFor="director">Director:</label><br />
        <input type="text" id="director" value={director} onChange={(e)=>setDirector(e.target.value)} placeholder='Escriba aqui...' required/><br />
        <label htmlFor="anio">Año:</label><br/>
        <input type="number" id="anio" value={anio} onChange={(e)=>setAnio(e.target.value)} placeholder='Escriba aqui...' required/><br />
        <label htmlFor="tipo">Tipo:(pelicula o serie)</label><br/>
        <input type="text" id="tipo" value={tipo} onChange={(e)=>setTipo(e.target.value)} placeholder='Escriba aqui...' required/><br />
        <label>Género:</label><br />
      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option >Seleccione</option>
        <option value="Acción">Acción</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
        <option value="Drama">Drama</option>
        <option value="Comedia">Comedia</option>
      </select><br /><br />
      
      <pre>Estado:</pre>
      <label>Vista
        <input className={styles.radio}
          type="radio"
          name="estadoVista"
          value="vista"
          checked={estadoVista === 'vista'}
          onChange={(e) => setEstadoVista(e.target.value)}
        />
      </label><br />
      <label>No vista
        <input className={styles.radio}
          type="radio"
          name="estadoVista"
          value="noVista"
          checked={estadoVista === 'noVista'}
          onChange={(e) => setEstadoVista(e.target.value)}
        />
      </label><br />
        <button type="submit">Agregar</button>
        </form>
    </div>
  )
}

export default FormularioPelicula