
import { useState } from "react";

const ItemCount = () =>{
    let count=0
    const sumar=()=>{
        count=count + 1;
        console.log(count)
    }
    const restar=()=>{
        count=count - 1;
        console.log(count)
    }

    return(
        <div>
            <h1>Contador</h1>
            <h3>{count}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}


export default ItemCount