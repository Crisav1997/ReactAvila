import { Link } from 'react-router-dom'
import './item.css';
const Item = ({id, name, img, price}) => {

    const handleOnClick = (event) => {
        event.stopPropagation()
    }
    return (
        <article className="CardItem" onClick={handleOnClick}>
            <header>
                <h2 className="titleItem">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="image"/>
            </picture>
            <section>
                <p className="priceItem">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            <button type="button" class="btn btn-light"><Link to={`/detail/${id}`} className='Option'>Ver detalle</Link></button>        
            </footer>
        </article>
    )
}

export default Item