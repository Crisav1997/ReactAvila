import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [inputType, setInputType] = useState('input')
    const [quantity, setQuantity] = useState(0)

    return (
         <article className='flexDetail' >
            <div className="card mt-2 cardDetail" >
            <img src={img} class="card-img-top" alt={name}/>
            <div className="card-body">
                 <h5 className="card-title text-center">{name}</h5>
                  <h2 className="card-text text-center"> {description}</h2>
                  <p className="card-text text-center text-primary">Precio: ${price}</p>
                  <ItemCount stock={stock}/>
                </div>          
             </div>
         </article>
        
    )
}

export default ItemDetail