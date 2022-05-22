import React from 'react';

export default function Restaurant(props) {
    console.log(props.item)

    return (
        //Prints out each restaurant with content
        <li className='card-group bg-light bg-gradient m-1'>
            <div class="card w-4">
                <img src={props.item.image_url} class="card-img-top" alt="Bild på mat"/>
                    <div class="card-body">
                        <a href='../public/ASingleRestaurant.html'>{props.item.name}</a>
                    </div>
            </div>
        </li>
    )
}
