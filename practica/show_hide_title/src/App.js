
import './App.css';
import { useState } from 'react';
import Switch from './components/Switch';
import Title from './components/Title';

function App() {

  const[show, setShow]=useState(true)

  const showTitle =()=>{
      setShow(!show)
  }

  return (
    <div className="App">
      <div className='container'>
      <Title title={"Welcome to React Challengues"} show={show}/>
      <Switch text={"Show-Hide"} onclick={showTitle}/>
      </div>
    </div>
  );
}

export default App;
