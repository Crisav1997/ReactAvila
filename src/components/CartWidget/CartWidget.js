import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget=({cuantity})=>{
    return(
        <div className="col-sm-3 ">
            <Link to ='/cart' >
            <button className='btn btn-light'>
                <img className='mr-2' src='././images/carrito.png' alt='CartWidget'/> 
                <h4>{cuantity}</h4>
                </button>
            </Link>
        </div>
    )
}
 export default CartWidget