import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart=()=>{
   const {cart} = useContext(CartContext)

   return(
    <div>
        <h1>Carrito</h1>
        <div>
        {cart.map(prod=>{
            return(
                <div>
                <h2 key={prod.id}>{prod.name}</h2>
                <h3>{prod.price}</h3>
                </div>
            )
        })}
        </div>
       <Link to='/checkout'>terminar compra</Link>
       
    </div>
   )
}

export default Cart