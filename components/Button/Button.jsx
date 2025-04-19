import './Button.module.css';

export const Button = ({ vista, porVer, arreglo, nombre }) => {
  const handleClick = () => {
    if (vista) {
      vista(arreglo);
    } else if (porVer) {
      porVer(arreglo);
    }
  };

  return (
    <button onClick={handleClick}>{nombre}</button>
  );
};

export const BotonEliminar = ({ nombre, elemento, funcion }) => {
  const handleEliminar = () => {
    funcion(elemento.id);
  }
    
  return (
    <button onClick={handleEliminar}>{nombre}</button>
  );
};

export const BotonEditar = ({ nombre, funcion }) => {
  const handleEditar = () => {
    funcion();
  }
    
  return (
    <button onClick={handleEditar}>{nombre}</button>
  );
};