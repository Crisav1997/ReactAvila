import { Link } from 'react-router-dom'
import { useContext } from 'react';
import './item.css';
const Item = ({id, name, img, price}) => {

    const handleOnClick = (event) => {
        event.stopPropagation()
    
            console.log("CLICL en item")
    
    }
    return (
        <article className="CardItem" onClick={handleOnClick}>
            <div className="card mt-2 card">
                <img src={img} class="card-img-top sizeImage" alt={name}/>
                <div class="card-body">
                 <h5 class="card-title text-cente titleItem">{name}</h5>
                <p class="card-text text-center text-primary priceItem">Precio: ${price}</p>
                <button type="button" class="btn btn-light"><Link to={`/detail/${id}`} className='Option'>Ver detalle</Link></button>
                </div>
            </div>
        </article>
    )
}

export default Item