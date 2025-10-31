import { createContext, useContext, useEffect, useState } from "react"

//contexto
export const CartContext = createContext()

//custom hook para usar el contexto
export const useCart = () => useContext(CartContext)

//proveedor del contexto
export function CartProvider({children}) {
    
    const [cart, setCart] = useState( ()=>{
        console.log("cargando carrito desde localstorage")
        const savedCart = localStorage.getItem("cart")
        console.log("carrito cargado:" + savedCart)
        return savedCart ? JSON.parse(savedCart) : []

    })

    useEffect(()=>{
        console.log("Guardando carrito en localstorage " + cart)
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (article) => {
        setCart((prev) => [...prev, article])
    }

    const removeFromCart = (articleId) => {
        console.log("Eliminando artículo con id:", articleId);
        setCart((prev) => prev.filter(item => item.id !== articleId))
    }

    const cleanCart = () => {
        setCart([])
    }

    const totalItems = cart.length
    const totalPrice = cart.reduce((total,item) => total + parseInt(item.price) /*para
    que no me muestre el 0 al principio */, 0)

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, 
        cleanCart, totalItems, totalPrice}}> 
            {children}
        </CartContext.Provider>
    )
}