import { useEffect, useState } from "react"

const ItemCount = ({onAdd},stock) =>{


    
const [count, setCount]= useState(0)
    const decrement=()=> {
        setCount(contador=>contador-1)
    }
    const increment=()=> {
        setCount(contador=>contador+1)
    }
    return(
        <div>
            <h1>Contador</h1>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={()=> onAdd(count)}>enviar</button>
        </div>
        
    )
}

export default ItemCount