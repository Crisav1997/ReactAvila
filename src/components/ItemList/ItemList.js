
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products }) => {
    return(
        <div className='ListGroup flex' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}
export default ItemList