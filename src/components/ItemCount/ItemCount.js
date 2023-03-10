import { useState } from "react";

const ItemCount =({initial=1,stock,onAdd})=>{
    const[count,setCount]=useState(initial)

    const decrement=()=>{
        if(count>1){
            setCount(previo=>previo-1)
        }
    }
    const increment=()=>{
        if(count<stock){
            setCount(previo=>previo+1)
        }
    }
    return(
       <div>
        <h3>{count}</h3>
        <button className='btn btn-dark' onClick={decrement}>-</button>
        <button className='btn btn-dark' onClick={increment}>+</button>
         <button className="btn btn-light" onClick={() => onAdd(count)}>Agregar al carrito</button>
       </div> 
            
    )
}

export default ItemCount