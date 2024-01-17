
import './App.css';
import RowElement from './components/RowElement';
import Controller from './components/Controller';
import {useState} from "react";

function App() {
  
 
  const[info, setInfo]=useState("");

 

  const add = () =>{
      setInfo(document.getElementById('inputInfo').value);
      document.getElementById('inputInfo').value="";
      document.getElementById('list').appendChild(<RowElement text={info}/>);
  }



  return (
    <div className="App">
        <div className='principal-container'>
            <div className='inputRow'>
              <input type='text' id='inputInfo' className='inputInfo' placeholder='Add a new row'></input>
              <Controller name="Add" type="add" onclick={add}/>
            </div>
            <div className='list'>
                  <ol id='listRows'></ol>
                  <RowElement text={info}/>
            </div>
        </div>
    </div>
  );
}

export default App;
