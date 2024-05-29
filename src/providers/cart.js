import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const totalValue = cart.reduce((total, item) => {
        const itemValue = parseFloat(item.value) || 0;
        return total + itemValue;
    }, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalValue }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
