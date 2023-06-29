import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RoutingDemo1 from './RoutingDemo1';

function App() {
  const studentData = [
    {roll : 1, fname : "Krushil", lname : "Dangar", city : "Rajkot"},
    {roll : 2, fname : "Jigar", lname : "Tikharji", city : "Rajkot"},
    {roll : 3, fname : "Ronak", lname : "Gokani", city : "Rajkot"},
    {roll : 4, fname : "Bansi", lname : "Kyada", city : "Rajkot"},
    {roll : 5, fname : "Gayatri", lname : "Patel", city : "Rajkot"},
    {roll : 6, fname : "Riddhi", lname : "Sarasiya", city : "Rajkot"},
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
          <ul className='navbar-nav'>
            
              {
                studentData.map((student)=>
                <li className='nav-item'>
                  <Link className='nav-link' to={"/printer/"+student.fname+"/"+student.city+"/"+student.roll}>{student.fname}</Link>
                </li>
                )
              }
            
          </ul>
        </nav>

        <Routes>
          <Route path='/printer/:fname/:city/:roll' element={<RoutingDemo1></RoutingDemo1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
