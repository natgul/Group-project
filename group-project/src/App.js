import React, {useState} from "react";
import RestaurantList from './RestaurantList';
import './App.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

function App() {
  return (
    <div className="app">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand display-4" href="#">Your Local Food Compass</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="display-5 mt-4 mb-5 text-center">Find your Restaurant
        </h1>
      </div>
      <RestaurantList/>
      <div id="map">
        <MapContainer id ="mapContainer" center={[55.596, 13.023]} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a 
        href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[55.596, 13.023]}>
            <Popup>09
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;