import logo from './logo.svg';
import './App.css';
import Students from './Students';
import FragmentExample1 from './FragmentExample1';
import ParentComponent from './ParentComponent';
import PureComponentExample from './PureComponentExample';
import PureComponentExample1 from './PureComponentExample1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Students></Students> */}
        {/* <FragmentExample1></FragmentExample1> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <PureComponentExample></PureComponentExample> */}
        <PureComponentExample1></PureComponentExample1>
      </header>
    </div>
  );
}

export default App;
