
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

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
            console.log(response)
            const data=response.data()
            const productAdapted={id:response.id , ...data}
        setProduct(productAdapted)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).finally(() => {
        //     setLoading(false)
        // })

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