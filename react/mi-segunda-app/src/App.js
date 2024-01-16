import './App.css';
import {useState} from 'react';
import Contator from './components/Contator';
import Button from './components/Buton';

function App() {
  const [nroClicks, setNumClicks] = useState(0.1);
  const [show, setShow] = useState(true);
  const mastres = () => {
    setNumClicks(nroClicks + 3);
  }
  const menostres = () => {
    setNumClicks(nroClicks - 3);
  }
  const masuno = () => {
    setNumClicks(nroClicks + 1);
  }
  const menosuno = () => {
    setNumClicks(nroClicks - 1);
  }
  const restart = () => {
    setNumClicks(0);
  }

  const mostrar = () => {
    setShow(!show);
  }

  return (

    
    <div className="App">
        <div className="principal-container">
          <Contator nroClicks={nroClicks} mostrar={show}/>

        </div>
        
          <div className='buttons-k'>
          <Button text="-3" buttonClick={true} functionClick={menostres}/>
          <Button text="+3" buttonClick={true} functionClick={mastres}/>
          <Button text="-1" buttonClick={true} functionClick={masuno}/>
          <Button text="+1" buttonClick={true} functionClick={menosuno}/>
          </div>
          
          <Button text="restart" buttonClick={false} functionClick={restart}/>
          <Button text="Mostrar/Ocultar" buttonClick={false} functionClick={mostrar}/>
    </div>
  );
}

export default App;
