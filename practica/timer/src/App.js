
import './App.css';
import Controller from './components/Controller';
import {useState} from "react";

function App() {
  const[timer,setTimer]=useState(0);

  const startTimer = () =>{
    window.myTimer = setInterval(() => {setTimer((timer) => timer + 1);}, 1000);
  }

  const stopTimer = () =>{
    clearInterval(window.myTimer);
  }

  const resetTimer = () =>{
    clearInterval(window.myTimer);
    setTimer(0);
  }


  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Timer</h1>
        <div className='timer'>
            <p>{Math.trunc(timer / 60)} Minutes </p>
            <p>{timer % 60} Seconds</p>
        </div>
        <div className='controller-container'>
          <Controller type={"start"} text={"Start"} onclick={startTimer}/>
          <Controller type={"stop"} text={"Stop"} onclick={stopTimer}/>
          <Controller type={"reset"} text={"Reset"} onclick={resetTimer}/>
        </div>
      </div>
    </div>
  );
}

export default App;
