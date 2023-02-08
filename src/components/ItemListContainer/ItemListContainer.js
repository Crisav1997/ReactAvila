import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getDocs,collection,query,where} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
     useEffect(() => {
        document.title = 'Catalogo de articulos'
    }, [])
    useEffect(() => {
        setLoading(true) 

    const collectionRef=categoryId
    ?query(collection(db,'products'),where('category','==',categoryId)) 
    :collection(db,'products')
    getDocs(collectionRef).then(response=>{
        console.log(response)
        const productsAdapted =response.docs.map(doc=>{
            const data=doc.data()
            return{ id:doc.id, ...data}
        })
        setProducts(productsAdapted)
    }).catch(error=>{console.log(error)} 
    ).finally(()=>{setLoading(false)})
    }, [categoryId])

    if(loading) {
        return (<div class="bgMain">
        <div class="spinner-border text-warning text-center mt-4" role="status"></div>
        </div>)
    }
    return (
        <div className='ItemListContainer bgMain'>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer