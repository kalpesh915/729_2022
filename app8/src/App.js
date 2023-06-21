import logo from './logo.svg';
import './App.css';
import LifeCycleExample from './LifeCycleExample';
import { useState } from 'react';
import HooksExample from './HooksExample';

function App() {
  let [status, setStatus] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {/* {
          status ? <LifeCycleExample></LifeCycleExample> : <h1>Welcome</h1>
        }
        <hr></hr>
        <button onClick={()=>setStatus(!status)}>Toggle</button> */}
        <HooksExample></HooksExample>
      </header>
    </div>
  );
}

export default App;
