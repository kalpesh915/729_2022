import logo from './logo.svg';
import './App.css';
import ReferenceExample1 from './ReferenceExample1';
import ReferenceExample2 from './ReferenceExample2';
import ForwardRefParent from './ForwardRefParent';

function App() {
  return (
    <div className="App">
      {/* <ReferenceExample1></ReferenceExample1> */}
      {/* <ReferenceExample2></ReferenceExample2> */}
      <ForwardRefParent></ForwardRefParent>
    </div>
  );
}

export default App;
