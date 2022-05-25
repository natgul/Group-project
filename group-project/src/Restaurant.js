import React, { useState } from "react";
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
    console.log(data.coordinates)

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
    .then(data => setARestaurant(data))

    return (
        <div>
            {data.name}
            <div id="map">
                <MapContainer id ="mapContainer" center={[55.123, 21.462]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[55.123, 21.462]}>
                    <Popup>09
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
        </div>
    )
}