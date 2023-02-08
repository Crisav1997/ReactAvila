import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products }) => {
    const handleOnClick=(event)=>{
        event.stopPropagation()
    }
    return(
        <div className='ListGroup flex' onClick={handleOnClick}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}
export default ItemList