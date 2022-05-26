import React from 'react';
import { Link } from "react-router-dom";

export default function Restaurant(props) {
    return (
        //Prints out each restaurant with content
        <li className='card-group'>
            <div className="card text-center w-4">
                <img src={props.item.image_url} className="card-img-top h-100" alt="Bild på mat" />
                {<div className="card-title">
                    <Link to={'/restaurant/' + props.item.id}> {props.item.name} </Link>
                </div>}

            </div>
        </li>
    )
}

