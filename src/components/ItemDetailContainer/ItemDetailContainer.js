
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        const docRef= doc(db,'products',productId)
        getDoc(docRef).then(response=>{
            const data=response.data()
            const productAdapted={id:response.id , ...data}
        setProduct(productAdapted)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
       
    }, [productId])

    if(loading) {
        return <h2>Cargando...</h2>
    }
    return(
        <div className='ItemDetailContainer bgMain' >
            <h2>{"Su eleccion"}</h2>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}
export default ItemDetailContainer