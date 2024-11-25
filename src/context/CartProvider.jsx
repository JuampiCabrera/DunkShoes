import { cartContext } from './cartContext';
import { useState } from 'react';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = item => setCart([...cart, item])

    const clearCart = () => setCart([])

    const getQuantity = () => {
        const qtyOnly = cart.map(item => item.qty);
        const total = qtyOnly.reduce((acc, current) => acc + current, 0);
        return total;
    }


    function getTotal() {
        const priceOnly = cart.map(item => item.price * item.qty);
        const total = priceOnly.reduce((acc, current) => acc + current, 0);
        return total;
    }

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, clearCart, getQuantity, getTotal, removeFromCart }}>
            {children}
        </cartContext.Provider>
    );

}

export default CartProvider;
