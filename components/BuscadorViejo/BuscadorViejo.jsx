import  styles  from './Buscador.module.css';       // se usa styles cuando se usa className




export const Buscador = ({busqueda, setBusqueda }) => {


  



  return (
    <div>
    <label htmlFor="busqueda">Buscador:</label><br />
    <input
     id="busqueda"
     type="text"
     placeholder="ingresa pelicula"
     value={busqueda}
     onChange={(e) => setBusqueda(e.target.value)}
     className={styles.inputBuscador}                   //se usa styles.nombreclase por el "module" 
    />
    </div>
  )
}
