import  styles  from './Buscador.module.css';




export const Buscador = ({busqueda, setBusqueda }) => {

  return (
    <div>
    <label htmlFor="busqueda">Buscador</label>
    <input
     id="busqueda"
     type="text"
     placeholder="ingresa pelicula"
     value={busqueda}
     onChange={(e) => setBusqueda(e.target.value)}
     className={styles.inputBuscador}
    />
    </div>
  )
}
