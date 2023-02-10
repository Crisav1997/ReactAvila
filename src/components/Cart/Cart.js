import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart=()=>{
   const {cart,total,removeItem} = useContext(CartContext)
    if(total===0){
        return (
            <div className="bgMain">
                <h1>Carro Vacio</h1>
            </div>
        )
    }else{
   return(
    <div className="container-fluid bgMain">
        <div className="row">
            <div className="col-sm-12"> Productos Seleccionados</div>
        </div>
        <div className="row">
            <div className="col-sm-9">
                <table className="table table-striped table-warning">
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
            </div>
            <div className="col-sm-3"> 
            <h1>Total : {total}</h1>
            <button className="btn btn-primary ">
            <Link className="text-light" to='/checkout'>Terminar Compra</Link>
            </button>
       </div>
        </div>
    </div>
   )
}
}

export default Cart