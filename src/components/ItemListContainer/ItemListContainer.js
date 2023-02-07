import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory} from "../../asyncMock"
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
        // console.log(productsAdapted)
        setProducts(productsAdapted)
    }).catch(error=>{console.log(error)} 
    ).finally(()=>{
        setLoading(false)}
    )
        //FETCH VIEJO
        // const asyncFunction = categoryId ? getProductsByCategory : getProducts
        // asyncFunction(categoryId).then(response => {
        //     setProducts(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })          
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
        
    }
    return (
        <div className='ItemListContainer bgMain' onClick={()=>console.log("hice click en itemlistContainer")}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer