import { Titulo }  from '../../components/Titulo/Titulo.jsx/';

function Home() {
    const nombre = "Videoclub";
  
    return (
        <div>
            <Titulo texto={nombre}/>
        </div>
    );
  };

export default Home