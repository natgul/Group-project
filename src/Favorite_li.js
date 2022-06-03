import React from 'react';

export default function Favorite(props) {
    return (
        // Returnerar en bild och namnet för varje restaurang från locastorage
        <li className='card-group mx-auto mt-3'>
            <div className="card text-center">
                <a href={"/restaurant/" + props.item.id}>
                    <img src={props.item.image_url} alt={props.item.name} />
                    <h3 className='card-title'> {props.item.name} </h3>
                </a>
            </div>
        </li>
        
    )
}

