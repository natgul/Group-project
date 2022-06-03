import React from 'react';
import { Link } from "react-router-dom";
import removeAsFavorite from './Restaurant';


export default function Favorite(props) {
    return (
        //Returnerar en bild och namnet för varje restaurang från locastorage

        //Behövs måsvingarna på rad 12 och 14?
        <li className='card-group mx-auto mt-3'>
            <div className="card text-center">
                <a href={"/restaurant/" + props.item.id}>
                    <img src={props.item.image_url} alt={props.item.name} />
                    <h3 className='card-title'> {props.item.name} </h3>
                    <button className="btn btn-danger ms-3" onClick={removeAsFavorite}>Remove as Favorite</button>
                </a>
            </div>
        </li>
        
    )
}

