import { Link } from 'react-router-dom'
import './item.css';
const Item = ({id, name, img, price}) => {

    const handleOnClick = (event) => {
        event.stopPropagation()
    }
    return (
        <article className="CardItem" onClick={handleOnClick}>
            <div className="card mt-2 card">
                <img src={img} className="card-img-top sizeImage" alt={name}/>
                <div className="card-body">
                 <h5 className="card-title text-cente titleItem">{name}</h5>
                <p className="card-text text-center text-primary priceItem">Precio: ${price}</p>
                <button type="button" className="btn btn-light"><Link to={`/detail/${id}`} className='Option'>Ver detalle</Link></button>
                </div>
            </div>
        </article>
    )
}

export default Item