import React from 'react';
import { Link } from "react-router-dom";

export default function Restaurant(props) {
    return (
        //Prints out each restaurant with content
        <li className='card-group bg-light bg-gradient m-1'>
            <div className="card w-4">
                <img src={props.item.image_url} className="card-img-top" alt="Bild på mat"/>
                    <div className="card-body">
                        <Link to={'/restaurant/' + props.item.id}> {props.item.name} </Link>
                    </div>
            </div>
        </li>
    )
}