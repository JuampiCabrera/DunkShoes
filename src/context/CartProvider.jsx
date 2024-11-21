import { cartContext } from './cartContext';
import { useState } from 'react';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = item => setCart([...cart, item])

    const clearCart = (id) => setCart([])

    function getQuantity() {
        const qtyOnly = cart.map(item => item.qty);
        const total = qtyOnly.reduce((acc, current) => acc + current, 0);
        return total;
    }
    const handleRemoveItem = (id) => {setCartItems(cartItems.filter(item => item.id !== id));};

    return (
        <cartContext.Provider value={{ cart, addToCart, clearCart, getQuantity, handleRemoveItem }}>
            {children}
        </cartContext.Provider>
    );

}

export default CartProvider;
