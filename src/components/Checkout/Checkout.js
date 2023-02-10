import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import Forms from "../forms/Forms"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [orderRej, setOrderRej] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async (name,email,phone) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total
            }
            const batch = writeBatch(db)
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                const { id } = orderAdded
                setOrderId(id)
                setTimeout(() => {
                    clearCart()
                    navigate('/')
                }, 5000)
            } else {
               console.log('hay productos fuera de stock')
                setOrderRej(true)
                setTimeout(() => {
                    clearCart()
                    navigate('/')
                }, 5000)
            }
        } catch (error) {
            console.error(error)
            
        } finally {
            setLoading(false)
        }   
    }
    if(loading) {
        return <h1 className="bgMain">Generando orden...</h1>
    }
    if(orderRej){
        return (<div>
            <h1>Orden rechazada</h1>
            <h3>Stock Agotado</h3>
            <h4>Sera redirigido al menu principal</h4>
            </div>)
    }
    if(orderId) {
        return (
            <div className="bgMain mt-2">
                <h1>El Id de su compra es: {orderId}</h1>
            </div>
        )
    }
    if(cart.length === 0) {
        return (
            <h1 className="bgMain">No hay productos en el carrito</h1>
        )
    }
    return (
        <div>
            <Forms onGenerate={createOrder}/>
        </div>
    )
}

export default Checkout