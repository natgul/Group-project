import React from "react";
import { useParams } from "react-router-dom";

export default function ASingleRestaurant(props) {
    let { id } = useParams();
    return (
        <div>
            <h1>
                {props.name}
            </h1>
        </div>
    )
}