import RestaurantList from './Restaurant_ul';
import Restaurant from './Restaurant.js'
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand display-4 text-white" href="/">Your Local Food Compass</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={ <RestaurantList/> } />
        <Route path="/restaurant/:id" element={ <Restaurant/> }/>
      </Routes>
    </div>
  );
}

export default App;