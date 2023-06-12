import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import { useState } from 'react';
function App() {


  let [fname, setFname] = useState("Ronak");

  return (
    <div className="App">
      <header className="App-header">
        {/* <Component1></Component1> */}
        {/* <Component2></Component2> */}
        {/* <Component3></Component3> */}
        {/* <Component4></Component4> */}
        {/* <Component5></Component5> */}
        {/* <Component6></Component6> */}

        {/* 
          <Component_name propsName = {Props Data}></Comonent_name>
        */}
        <Component7 data={fname}></Component7>
        <button onClick={()=>setFname("RONAK")}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
