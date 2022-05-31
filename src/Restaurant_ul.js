import React, { useState, useRef } from 'react';
import Restaurant from './Restaurant_li';

export default function RestaurantList() {
    const [businesses, setRestaurant] = useState([]);

    const searchRef = useRef();
    const cityRef = useRef();

    function searchRestaurants() {

        const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchRef.current.value + "&location=" + cityRef.current.value;
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
            .then(data => {
                if ("businesses" in data) {
                    setRestaurant(data.businesses);
                } else {
                    alert("Din sökning finns inte. Sök igen!")
                }
            });
    }
 
    return (
        //Print list, including buttons
        <div className="container">
            <h1 className="display-5 mt-4 mb-5 text-center">
                Find your Restaurant
            </h1>
            <div className="d-flex justify-content-start mb-4">
                <div className="input-group mb-3">
                    <input ref={searchRef} type="text" className="form-control" placeholder="Search for your favorite food or restaurant" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input ref={cityRef} type="text" aria-label="City" placeholder="City" className="form-control"></input>
                    <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={searchRestaurants}>Search</button>
                </div>
            </div>
            <div className="mb-4">
                <ul id="restaurant-list">
                    {businesses.map(restaurant => <Restaurant key={restaurant.id} item={restaurant} />)}
                </ul>
            </div>
        </div>);

}