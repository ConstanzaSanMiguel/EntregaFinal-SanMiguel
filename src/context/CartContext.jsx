import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        const existingProduct = cart.find((item) => item.id === product.id)

        if (!existingProduct) {
            setCart((prev) => [...prev, { ...product, quantity }])
        } else {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + quantity }
                }
                return item
            })
            setCart(updatedCart)
        }
    }

    const removeItem = (itemId, removeAll = false) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                if (removeAll || item.quantity === 1) {
                    return null
                } else {
                    return { ...item, quantity: item.quantity - 1 }
                }
            }
            return item
        })
        setCart(updatedCart.filter((item) => item !== null))
    }

    const clearCart = () => {
        setCart([])
    }

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart, total, totalQuantity }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider