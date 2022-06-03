import React from 'react';
import { Link } from "react-router-dom";

export default function Restaurant(props) {
    return (
        //Returnerar en bild och namnet för varje restaurang från API:et

        //Behövs måsvingarna på rad 12 och 14?
        <li className='card-group'>
                <div className="card text-center">
                    <a href={"/restaurant/" + props.item.id}>
                        <img
                        src={props.item.image_url} 
                        alt={props.item.name}
                        />
                        <h3 className="card-title">{props.item.name}</h3>
                    </a>
                    
                </div>
        </li >
    )
}