import './CartWidget.css'

const CartWidget=({totalQuantity})=>{
    return(
        <div class="col-sm-3 CartWidget">
            <img className='mr-2' src='././images/carrito.png' alt='CartWidget'/>
            <p className='pt-3 ml-1'>{totalQuantity}</p>
            {totalQuantity}
        </div>
    )
}
 export default CartWidget