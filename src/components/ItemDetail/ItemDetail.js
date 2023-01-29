import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

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

const ButtonCount=({onConfirm,stock,initial=1})=>{
    const[count,setCount]=useState(initial)
    const increment=()=>{
        if(count<stock){
            setCount(count+1)
        }
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <h3>{count}</h3>
            <button className='btn btn-dark' onClick={decrement}>-</button>
            <button className='btn btn-dark' onClick={increment}>+</button>
        {/* <button className="btn btn-light" onClick={()=>onAdd(count)}>Terminar compra</button> */}
       </div> 
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description,setCart}) => {
    const [inputType, setInputType] = useState('input')
    const [quantity,setQuantity]=useState(0)
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const {addItem,isInCart}=useContext(CartContext)

    const handleOnAdd =(quantity)=>{
        console.log("agregamos al carrito",quantity)
        setQuantity(parseInt(quantity))
        addItem({id,name,price,quantity})
    }
    
    return (
         <article className='flexDetail' >
            <div className="card mt-2 cardDetail" >
            <button onClick={()=>setInputType(inputType==="input"?"button":'input')}>Cambiar Contador</button>
            <img src={img} class="card-img-top" alt={name}/>
            <div className="card-body">
                 <h5 className="card-title text-center">{name}</h5>
                  <h2 className="card-text text-center"> {description}</h2>
                  <p className="card-text text-center text-primary">Precio: ${price}</p>
                  {
                    isInCart(id)?(
                        <button>terminar compra</button>
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