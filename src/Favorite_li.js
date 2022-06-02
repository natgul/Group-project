import React from 'react';
import { Link } from "react-router-dom";
import removeAsFavorite from './Restaurant';


export default function Favorite(props) {
    return (
        //Returnerar en bild och namnet för varje restaurang från locastorage

        //Behövs måsvingarna på rad 12 och 14?
        <li className='card-group'>
            <div className="card text-center w-4">
                <img src={props.item.image_url} className="card-img-top h-100" alt="Bild på mat" />
                {<div className="card-title">
                    <Link to={"/restaurant/" + props.item.id}> {props.item.name} </Link>
                </div>}
                <button className="btn btn-danger ms-3" onClick={removeAsFavorite}>Remove as Favorite</button>
            </div>
        </li>
    )
}