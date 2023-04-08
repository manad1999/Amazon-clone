import React from "react";
import { useStateValue } from "./StateProvider";

function Display()
{
    const [ {basket} , dispatch] = useStateValue();
    console.log(basket);
    return ( basket.map((item) =>
    {
        console.log(item.title);
        <h1>{item.title}</h1>
    }
    )
    );
}

export default Display;