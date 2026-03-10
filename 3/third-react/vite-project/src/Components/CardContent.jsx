
import { createContext, useState } from 'react';

export const CardContent = createContext();

export const CardContentProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const addToCart = (plan) => {
        setCart((prevCart) =>[...prevCart, plan]);
    };

    const removeFromCart =(idx) => {
        setCart(cart.filter((_, index) => index !== idx));
    }

    return(
        <CardContent.Provider value={{cart, addToCart, isCartOpen, toggleCart, removeFromCart}}>
            {children}
        </CardContent.Provider>
    )
}

export default CardContent;