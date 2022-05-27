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
    const [data, setARestaurant] = useState([]); 

    useEffect(() => {
        const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + id
        fetch(apiUrl, {
            dataType: "JSON",
            type: "GET",
            headers: {
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin":"*",
            "Authorization": "Bearer B8MpKP0IqRtA3yEc4ORkYncoDs5dx0bIBCGf897_MhWVRuRfo_-724X6h3yjJvB8hio3IUMUJ4GCeuYLT-rvSpvJ5MA_5X4Ez6ZtqBxQzeADohRtEblL_ZH2Se2FYnYx"
            }
        })
        .then(res => res.json())
        .then(data => { setARestaurant(data) }) 
    }, [id]);
    
    function addRestaurantToList() {
        console.log("add")
    }

    //Hämtar kartan & placerar ut en marker på den klickade restaurangen.
    return data.coordinates?(
        <div>
            {data.name}
            <div id="map">
                <MapContainer id ="mapContainer" center={[data.coordinates.latitude, data.coordinates.longitude]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[data.coordinates.latitude, data.coordinates.longitude]}>
                    <Popup>
                        09 A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
            {/*Varje bild/item ska man kunna lägga till i favoritlistan genom koden nedan. OKLART DOCK OM DEN SKA SE UT SÅ HÄR, men funktionen finns där i alla fall */}
            <button className="btn" onClick={addRestaurantToList}>Save as Favourite</button>
        </div>
    ):
    (<span></span>);
}