import logo from './logo.svg';
import './App.css';
import LifeCycleMethodsExample from './LifeCycleMethodsExample';
import { useState } from 'react';

function App() {
  let [status, setStatus] = useState(true);
  return (
    <div className="App">
      
      {
        status ? <LifeCycleMethodsExample></LifeCycleMethodsExample> : <h1>Life Cycle</h1>
      }
        <hr/>
        <button onClick={()=>setStatus(!status)}>Change State</button>
    </div>
  );
}

export default App;
