import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const InputCount=({onConfirm,stock,initial})=>{
    const [count , setCount]=useState(initial)
    const handleChange=(e)=>{
        if(e.target.value<=stock){
            setCount(e.target.value)
        }
    }
    return(
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={()=>onConfirm(count)}>Agregar al carrito </button>
        </div>
    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description,setCart}) => {
    const [inputType, setInputType] = useState('input')
    const [quantity,setQuantity]=useState(0)
    const ItemCount = InputCount

    const {addItem,isInCart}=useContext(CartContext)

    const handleOnAdd =(quantity)=>{
        setQuantity(parseInt(quantity))
        addItem({id,name,price,quantity})
    }
    
    return (
         <article className='flexDetail' >
            <div className="card mt-2 cardDetail" >
            <img src={img} class="card-img-top" alt={name}/>
            <div className="card-body">
                 <h5 className="card-title text-center">{name}</h5>
                  <h2 className="card-text text-center"> {description}</h2>
                  <p className="card-text text-center text-primary">Precio: ${price}</p>
                  {
                    isInCart(id)?(
                        <Link to='/cart'>Terminar compra</Link>
                    ):(
                        <ItemCount stock={stock} onConfirm={handleOnAdd}/>
                    )
                  }
                </div>          
             </div>
         </article>
        
    )
}

export default ItemDetail