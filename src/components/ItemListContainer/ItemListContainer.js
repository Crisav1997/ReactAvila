import './ItemListContainer.css'
import { useEffect, useState } from "react"

const ItemListContainer=({greeting})=>{
    
    useEffect(()=>{
        console.log("despues")
    })
    console.log("render")

return(
    <div className='ItemListContainer pt-4'>
        <h1>{"ItemListContainer PreEntregaAvila1"}</h1>
    </div>
)
}

export default ItemListContainer