import logo from './logo.svg';
import './App.css';
import Event1 from './Event1';
import Event2 from './Event2';
import Input1 from './Input1';
import Input2 from './Input2';
import Input3 from './Input3';
import Input4 from './Input4';
import Hideshow1 from './Hideshow1';
import { useState } from 'react';

function App() {
  let [status, setStatus] = useState(true);
  return (
    <div className="App">
      {/* <Event1></Event1> */}
      {/* <Event2></Event2> */}
      {/* <Input1></Input1> */}
      {/* <Input2></Input2> */}
      {/* <Input3></Input3> */}
      <Input4></Input4>

      {
        // java script code
        /*
            turnery operator
            condition ? true part : false part
        */ 

            // status ? <Hideshow1></Hideshow1> : <h1>Element is Hidden</h1>
      }

      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}

      {/* <button onClick={()=>setStatus(!status)}>Toggle</button> */}
    </div>
  );
}

export default App;
