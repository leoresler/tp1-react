import './Titulo.module.css';


const Titulo = ({ textoTitulo }) => {
  return (
    <header>
       <h1>
        {textoTitulo}
      </h1>
      <h2>Video-Club</h2>
    </header>
  
  );
}; 

export default Titulo

