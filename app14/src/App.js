import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Feedback from './Components/Feedback';
import Contact from './Components/Contact';
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Error404 from './Components/Error404';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <nav className='navbar bg-dark navbar-dark navbar-expand-sm'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Home</Link>    
          </li>
          <li className='nav-item'>
              <Link to="/about" className='nav-link'>About</Link>    
          </li>
          <li className='nav-item'>
              <Link to="/products" className='nav-link'>Products</Link>    
          </li>
          <li className='nav-item'>
              <Link to="/feedback" className='nav-link'>Feedback</Link>    
          </li>
          <li className='nav-item'>
              <Link to="/contact" className='nav-link'>Contact</Link>    
          </li>
          <li className='nav-item'>
              <Link to="/login" className='nav-link'>Login</Link>    
          </li>
          {/* 
            never use a tag for create link in react routing
            <li className='nav-item'>
              <a href="/login" className='nav-link'>Login</a>    
            </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
