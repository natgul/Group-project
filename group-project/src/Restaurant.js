import React from 'react';

export default function Restaurant(props) {

    return (
        //Prints out each restaurant with content
        <li className='card-group bg-light bg-gradient m-1'>
            <div class="card w-4">
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        {props.item.name}
                    </div>
            </div>
        </li>
    )
}
