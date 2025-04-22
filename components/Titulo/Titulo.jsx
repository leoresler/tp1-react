import './Titulo.module.css';

const Titulo = ({ textoTitulo }) => {
  return (
    <header>
      <h1>
        {textoTitulo}
      </h1>
    </header>

  );
};

export default Titulo

