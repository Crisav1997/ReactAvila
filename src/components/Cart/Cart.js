import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart=()=>{
   const {cart,total,removeItem} = useContext(CartContext)
   
   return(
    <div className="flex">
            <table class="table table-striped table-warning">
                <thead>
                    <tr class="text-center">
                        <th scope="col">Articulo</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Borrar</th>
                    </tr>
                    </thead>
                    <tbody>
            {cart.map(prod=>{
                return(
                
                    <tr class=" lign-middle">
                        <td>{prod.name}</td>
                        <td>{prod.quantity}</td>
                        <td>{prod.price}</td>
                        <td><button class="btn btn-danger" onClick={()=>removeItem(prod.id)}>borrar</button></td>
                    </tr>
                
                )
             })
            }   
        
        </tbody>
        </table>
        <h1>Total : {total}</h1>
        <button class="btn btn-primary ">
            <Link className="text-light" to='/checkout'>Terminar Compra</Link>
        </button>
    </div>
   )
}

export default Cart