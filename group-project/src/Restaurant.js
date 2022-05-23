import React from 'react';

export default function Restaurant(props){

    return (
        //Prints out each restaurant with content
        <li className='list-group-item bg-light bg-gradient m-1'>
            {props.item.name}
        </li>
    )
}
