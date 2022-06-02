import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';

export default function ASingleRestaurant() {
    let { id } = useParams();
    const [ data, setARestaurant ] = useState([]); 

    useEffect(() => {
        const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + id;
        fetch(apiUrl, {
            dataType: "JSON",
            type: "GET",
            headers: {
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer B8MpKP0IqRtA3yEc4ORkYncoDs5dx0bIBCGf897_MhWVRuRfo_-724X6h3yjJvB8hio3IUMUJ4GCeuYLT-rvSpvJ5MA_5X4Ez6ZtqBxQzeADohRtEblL_ZH2Se2FYnYx"
            }
        })
        .then(res => res.json())
        .then(data => { setARestaurant(data) })
    }, [id]);

    
    function loadFavorites() {
        var favorites = localStorage.getItem("favorites");
        return JSON.parse(favorites);
    }

    function addRestaurantToFavorites() {
        var favorites = loadFavorites()

        if (favorites.some(e => e.id === id)) {
            alert("This restaurant is already in your favorites!");
        } else {            
            favorites.push(data);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("This restaurant has been added to your favorites!");
        }
    }

    function removeAsFavorite() {
        var favorites = loadFavorites();

        var favorites = favorites.filter(function(favorite) {
            return favorite.id !== id;
        });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("This restaurant has been removed from your favorites!")
    }

    //Hämtar kartan & placerar ut en markör på den klickade restaurangen
    return data.coordinates?(
        <div className="container">
            <h2>{data.name}</h2>
            <p>Rating: {data.rating}/5</p>
            <p>Phone number: {data.phone}</p>
            <p>Address: {data.location.address1}</p>
            <div id="map">
                <MapContainer id="mapContainer" center={ [data.coordinates.latitude, data.coordinates.longitude] } zoom={ 15 } scrollWheelZoom={ true }>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={ [data.coordinates.latitude, data.coordinates.longitude] }>
                    <Popup>
                        Tjena Kexet! <br /> Sitter du här och smular?.
                    </Popup>
                </Marker>
                </MapContainer>
                <br></br>
            </div>
            <button className="btn btn-success" onClick={addRestaurantToFavorites}>Save as Favorite</button>
            <button className="btn btn-danger ms-3" onClick={removeAsFavorite}>Remove as Favorite</button>
        </div>
    ):
    (<span></span>);
}