import { Link } from 'react-router-dom'
import './CartWidget.css'


const CartWidget=({cuantity})=>{
    return(
        <div class="col-sm-3 CartWidget">
            <Link to ='/cart' >ver carrito</Link>
            <img className='mr-2' src='././images/carrito.png' alt='CartWidget'/>
            {cuantity}
        </div>
    )
}
 export default CartWidget