import './Home.modules.css';
import { Titulo }  from '../../components/Titulo/Titulo.jsx/';
import { Button } from '../../components/Button/Button.jsx';

function Home() {
    const nombre = "Videoclub";
  
    return (
        <>
            <Titulo texto={nombre}/>

            <Button/>
        </>
    );
  };

export default Home