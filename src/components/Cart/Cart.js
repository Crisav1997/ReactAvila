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
                <div className="">
                <h2 key={prod.id}>{prod.name}</h2>
                <h3>{prod.price}</h3>
                </div>
                )
             })
            }   
        </div>
        <button class="btn btn-primary">
            <Link to='/checkout'>Terminar Compra</Link>
        </button>
    </div>
   )
}

export default Cart