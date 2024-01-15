import './App.css';
import {useState} from 'react';
import Contator from './components/Contator';
import Button from './components/Buton';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
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
  return (

    
    <div className="App">
        <div className="principal-container">
          <Contator nroClicks={nroClicks}/>
        </div>
        <div className="buttons-container">
          <div className='buttons-k'>
          <Button text="-3" buttonClick={true} functionClick={menostres}/>
          <Button text="+3" buttonClick={true} functionClick={mastres}/>
          <Button text="-1" buttonClick={true} functionClick={masuno}/>
          <Button text="+1" buttonClick={true} functionClick={menosuno}/>
          </div>
          
          <Button text="restart" buttonClick={false} functionClick={restart}/>
        </div>
    </div>
  );
}

export default App;
