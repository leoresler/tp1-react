import styles from "./FormAgregarPeliculas.module.css";
import { useState } from "react";

const FormAgregarPeliculas = ({ onAgregar }) => {
  const [nuevaPelicula, setNuevaPelicula] = useState({
    titulo: "",
    director: "",
    año: "",
    genero: "",
    tipo: "",
    rating: "",
  });

  const generos = [
    "Acción",
    "Comedia",
    "Drama",
    "Ciencia Ficción",
    "Terror",
    "Fantasía"
  ];

  const handleChange = (e) => {
    setNuevaPelicula({
      ...nuevaPelicula,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar({ ...nuevaPelicula, id: crypto.randomUUID() });
    setNuevaPelicula({
      titulo: "",
      director: "",
      año: "",
      genero: "",
      tipo: "",
      rating: "",
    });
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={nuevaPelicula.titulo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={nuevaPelicula.director}
        onChange={handleChange}
      />
      <input
        type="text"
        name="año"
        placeholder="Año"
        value={nuevaPelicula.año}
        onChange={handleChange}
      />
      <select
        name="genero"
        value={nuevaPelicula.genero}
        onChange={handleChange}
      >
        <option value="">Selecciona un género</option>
        {generos.map((genero) => (
          <option key={genero} value={genero}>
            {genero}
          </option>
        ))}
      </select>

      <select
        name="tipo"
        value={nuevaPelicula.tipo}
        onChange={handleChange}
      >
        <option value="">Tipo (película/Serie)</option>
        <option value="Pelicula">Película</option>
        <option value="Serie">Serie</option>
      </select>
      <input
        type="text"
        name="rating"
        placeholder="Rating"
        value={nuevaPelicula.rating}
        onChange={handleChange}
      />
      <button className={styles.submitButton} type="submit">Agregar</button>
    </form>
  );
};

export default FormAgregarPeliculas;
