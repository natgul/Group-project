import React from 'react';
import Favorites from './Favorite_li';

export default function FavoriteList() {

    var favorites = JSON.parse(localStorage.getItem("favorites"));
    
    return (
        //Print list, including buttons
        <div className="container">
            <h1 className="display-5 mt-4 mb-5 text-center">
                Your favorite restaurants
            </h1>
            <div className="mb-4">
                <ul id="restaurant-list">
                    {favorites.map(restaurant => <Favorites key={restaurant.id} item={restaurant} />)}
                </ul>
            </div>
        </div>
    )
}