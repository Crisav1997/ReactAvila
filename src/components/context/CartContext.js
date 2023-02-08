import { useState,createContext } from "react"
export const CartContext = createContext()

 export const CartProvider=({children})=>{

    const [cart , setCart]= useState([])
    const addItem=(productToAdd)=>{
        if(!isInCart(productToAdd.id)){
           setCart(prev=>{
           return [...prev,productToAdd]})
        }else{
          console.error("Agregado")
        }
      }
      const isInCart=(id)=>cart.some(prod=>id===prod.id)
      
      const getTotalQuantity=()=>{
        let accu=0
        cart.forEach(prod=>{
            accu += parseInt(prod.quantity)
        })
        return accu
      }
      const clearCart = () => {
        setCart([])
      }
      const getTotal=()=>{
        let total=0
        cart.forEach(prod=>{
            total+=prod.quantity+prod.price
        })
        return total
      }

      const totalQuantity= getTotalQuantity()

      const total = getTotal()
    return(
        <CartContext.Provider value={{cart,addItem,isInCart,totalQuantity,total,clearCart }}>
        {children}
        </CartContext.Provider>
    )
}