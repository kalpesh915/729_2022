import logo from './logo.svg';
import './App.css';
import ClassComponent1 from './ClassComponent1';
import FunctionComponent1 from './FunctionComponent1';
//import {Jigar, Krushil, Ronak, Jeel, Sahid, Faizan} from './MultiComponent';
//import {*} from './MultiComponent';
import  * as Multi from './MultiComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent1></ClassComponent1>  
        <hr/>
        <FunctionComponent1></FunctionComponent1>       */}
        <Multi.Sahid></Multi.Sahid>
        <Multi.Faizan></Multi.Faizan>
        <Multi.Jigar></Multi.Jigar>
        <Multi.Krushil></Multi.Krushil>
        <Multi.Jeel></Multi.Jeel>
        <Multi.Ronak></Multi.Ronak>
      </header>
    </div>
  );
}

export default App;
