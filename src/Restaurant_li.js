import React from 'react';
import { Link } from "react-router-dom";

export default function Restaurant(props) {
    return (
        //Returnerar en bild och namnet för varje restaurang från API:et

        //Behövs måsvingarna på rad 12 och 14?
        <li className='card-group'>
            <div className="card text-center w-4">
                <img src={props.item.image_url} className="card-img-top h-100" alt="Bild på mat" />
                {<div className="card-title">
                    <Link to={"/restaurant/" + props.item.id}> {props.item.name} </Link>
                </div>}
            </div>
        </li>
    )
}