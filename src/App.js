import RestaurantList from './Restaurant_ul';
import Restaurant from './Restaurant';
import Favorites from './Favorite_ul';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white fs-2" href="/">Your Local Food Compass</a>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <span className="nav-link navbar-brand mt-1 active text-white" aria-current="page"> 
                  <Link to={"/favorites/"}> Favorites </Link>
                </span>
              </li>
            </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={ <RestaurantList/> } />
        <Route path="/restaurant/:id" element={ <Restaurant/> } />
        <Route path="/favorites/" element={ <Favorites/> } />
      </Routes>
    </div>
  );
}

export default App;