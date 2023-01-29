
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h2>Cargando...</h2>
    }
    return(
        <div className='ItemDetailContainer' >
            <h2>{"Su eleccion"}</h2>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}
export default ItemDetailContainer