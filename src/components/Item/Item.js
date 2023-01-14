import { Link } from 'react-router-dom'
import './item.css';
const Item = ({id, name, img, price}) => {

    const handleOnClick = (event) => {
        event.stopPropagation()
        console.log('hice click en item')
    }

    return (
        <article className="CardItem" onClick={handleOnClick}>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="image"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item