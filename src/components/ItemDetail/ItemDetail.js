import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, price, stock, description,}) => {
    const [quantity,setQuantity]=useState(0)
    const {addItem,isInCart}=useContext(CartContext)
    const handleOnAdd =(quantity)=>{
        setQuantity(parseInt(quantity))
        addItem({id,name,price,quantity})
    } 
    return (
         <article className='flexDetail ' >
            <div className="card mt-2 cardDetail bg-warning" >
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                 <h5 className="card-title text-center">{name}</h5>
                  <h2 className="card-text text-center"> {description}</h2>
                  <p className="card-text text-center text-primary">Precio: ${price}</p>
                  {
                    isInCart(id)?(
                        <div>
                            <button className="btn btn-light mt-2"><Link to='/cart'>Terminar compra</Link> </button>
                            <button className="btn btn-light mt-2"><Link to='/'>Volver al menu</Link> </button>
                        </div>
                    ):(
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                  }
                </div>          
             </div>
         </article>
    )
}

export default ItemDetail