import { cartContext } from './cartContext';
import { useState } from 'react';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
        
        if (existingItem) {
            const confirmAdd = window.confirm(
            `El producto "${item.id}" ya está en el carrito. ¿Deseas agregarlo nuevamente?`
        );
        if (confirmAdd) {
            return prevCart.map((cartItem) => cartItem.id === item.id 
            ? { ...cartItem, qty: cartItem.qty + item.qty }: cartItem
            );
        }
        return prevCart;
        } else {
            return [...prevCart, { ...item }];
        }
    });
};

    const getQuantity = () => {
    const total = cart.reduce((acc, item) => acc + item.qty, 0);
    return total;
    };

    const removeItemFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, getQuantity,removeItemFromCart }}>
            {children}
        </cartContext.Provider>
    );

}

export default CartProvider;
