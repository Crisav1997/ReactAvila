import './CartWidget.css'

const CartWidget=({cuantity})=>{
    return(
        <div class="col-sm-3 CartWidget">
            <img className='mr-2' src='././images/carrito.png' alt='CartWidget'/>
            {cuantity}
        </div>
    )
}
 export default CartWidget