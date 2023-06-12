import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        isInCart(item.id) 
            ? console.error('El producto ya fué agregado') 
            : setCart(prev => [...prev, {...item, quantity}])
    }
    
    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(item => item.id !== itemId)
        setCart(cartUpdate);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const cartTotal = () => {
        const totalPrice = cart.reduce((acc, currentValue) => {
            return acc + (currentValue.price * currentValue.quantity)
        }, 0)
        return totalPrice;
    }

    const totalQuantity = () => {
        const totalQt = cart.reduce((acc, currentValue) => {
            return (acc + currentValue.quantity)
        }, 0)
        return totalQt;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, cartTotal, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;