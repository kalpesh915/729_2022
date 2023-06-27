import logo from './logo.svg';
import './App.css';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import HighOrderExample1 from './HighOrderExample1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ControlledComponent></ControlledComponent> */}
        {/* <UnControlledComponent></UnControlledComponent> */}
        <HighOrderExample1></HighOrderExample1>
      </header>
    </div>
  );
}

export default App;
