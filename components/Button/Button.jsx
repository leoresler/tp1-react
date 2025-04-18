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