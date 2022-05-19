import React, { useState, useRef } from 'react';
import Restaurant from './Restaurant';


export default function RestaurantList() {
    const [restaurant, setRestaurant] = useState([

    ]);
    const inputRef = useRef();
    const gradeRef = useRef();

    function searchRestaurants() {
        /*
        {
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=stockholm&term=" + $("#search-field").val(), //Hämtar filmer från APIet med användarens input som sökvärde
            dataType: "JSON",
            type: "GET",
            headers: {
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin":"*",
                "Authorization": "Bearer B8MpKP0IqRtA3yEc4ORkYncoDs5dx0bIBCGf897_MhWVRuRfo_-724X6h3yjJvB8hio3IUMUJ4GCeuYLT-rvSpvJ5MA_5X4Ez6ZtqBxQzeADohRtEblL_ZH2Se2FYnYx"
        }
        */
    }


    function addRestaurantToList() {
        console.log("add")
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
            <div className="d-flex justify-content-start mb-4">
                <div className="input-group w-50 ms-4">
                    <input type="text" className="form-control" placeholder="Search for Restaurant" aria-label="searchRestaurant" aria-describedby="searchRestaurant" />
                    <button className="btn btn-dark" type="button" id="searchRestaurant" onClick={searchRestaurants}>Search</button>
                </div>
                <select className="form-select h-25 w-25 p-2 ms-4" aria-label="SelectGrade">
                    <option defaultValue>Filter by Grade</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="mb-4">
                <h2 className="display-6 mb-4">Restaurants</h2>
                
                {/*HÄR SKA RESTAURANGERNA GENOM API KÖRAS IN */}

                {/*Varje bild/item ska man kunna lägga till i favoritlistan genom koden nedan. OKLART DOCK OM DEN SKA SE UT SÅ HÄR, men funktionen finns där i alla fall */}
                <button className="btn" onClick={addRestaurantToList}>Save as Favourite</button>
            </div>

            <div>
                <h2 className="display-6">Favourites</h2>
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

