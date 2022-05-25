import React, { useState, useRef } from 'react';
import Restaurant from './Restaurant_li';

export default function RestaurantList() {
    const [businesses, setRestaurant] = useState([]);

    const searchRef = useRef();
    const cityRef = useRef();
    //const gradeRef = useRef();

    function searchRestaurants() {
        const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchRef.current.value + "&location=" + cityRef.current.value;
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
        .then(data => setRestaurant(data.businesses))
    }

    function deleteRestaurantFromList() {
        console.log("delete")
    }

    function sortByGrade() {
        console.log("sort")
    }

    return (
        //Print list, including buttons
        <div className="container">
            <h1 className="display-5 mt-4 mb-5 text-center">
                Find your Restaurant
            </h1>
            <div className="d-flex justify-content-start mb-4">
                <div class="input-group mb-3">
                    <input ref={searchRef} type="text" class="form-control" placeholder="Search for your favorite food or restaurant" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input ref={cityRef} type="text" aria-label="City" placeholder="City" class="form-control"></input>
                    <button class="btn btn-outline-dark" type="button" id="button-addon2" onClick={searchRestaurants}>Search</button>
                </div>
            </div>
            <div className="mb-4">
                <ul id="movie-list">
                    { businesses.map(restaurant => <Restaurant key={restaurant.id} item={restaurant} deleteRestaurant={deleteRestaurantFromList}/>) }
                </ul>
            </div>

            <div>
                <ul className="list-group ">
                    {/*
                    ----DENNA KOD RADEN SKA ÄNDRAS TILL ANNAN ----
                    {restaurants.map(restaurant => <restaurant key={restaurant.id} item={restaurant} deleteRestaurant={deleteRestaurantFromList} />)} 
                    -----SLUT PÅ KODRAD------
                    */}
                </ul>
            </div>
        </div>
    )
}