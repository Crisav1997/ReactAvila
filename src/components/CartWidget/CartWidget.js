import './CartWidget.css'

const CartWidget=()=>{
    return(
        <div class="col-sm-3 CartWidget">
            <img className='mr-2' src='./images/carrito.png' alt='CartWidget'/>
            <p className='pt-3 ml-1'>0</p>
        </div>
    )
}
 export default CartWidget