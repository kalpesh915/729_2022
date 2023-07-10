import logo from './logo.svg';
import './App.css';
import { Common } from './Components/CommonContext';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  let [bg, setBG] = useState("Brown");
  let [fg, setFG] = useState("White");

  function updateTheme(){
    setBG("Purple");
    setFG("white");
  }

  return (
    <div className="App">
      <Common.Provider value={{bg, fg}}>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <Login></Login>
      </Common.Provider>
      <button onClick={()=>updateTheme()}>Change Theme</button>
    </div>

    
  );
}

export default App;
