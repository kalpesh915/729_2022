import './App.css';
import MultiProps from './MultiProps';
import MultiPropsClass from './MultiPropsClass';
import PropsWithClass from './PropsWithClass';
import PropsWithFunction from './PropsWithFunction';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [fname, setFname] = useState("Krushil");
  let [lname, setLname] = useState("Dangar");
  let [city, setCity] = useState("Rajkot");
  return (
    <div className="App">
      <header className="App-header">
        {/* <PropsWithFunction count={count}></PropsWithFunction> */}
        {/* <PropsWithClass count={count}></PropsWithClass> */}
        {/* <button onClick={()=>setCount(count+1)}>Update</button> */}
        {/* <MultiProps data={{fname, lname, city}}></MultiProps> */}
        <MultiPropsClass data={{fname, lname, city}}></MultiPropsClass>
      </header>
    </div>
  );
}

export default App;
