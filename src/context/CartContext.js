import React, { createContext, useContext, useState } from 'react';

//React-router-dom
import { useNavigate } from "react-router-dom"

//JSON data
import profileData from "mocks/profile.json"

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cash, setCash] = useState(profileData.profile.credit)
    const [infoMessage, setInfoMessage] = useState("");
    const navigate = useNavigate()

    //Corrobora que si existe o no existe el producto seleccionado, en el carrito.
    const isInCart = (product) => {
        let flag = false
        let i = 0
        cart.map((item, index) => {
            if(item.id === product.id) {
                flag = true
                i = index
            };
        });
        return [flag, i];
    };
    
    //Agrega un item de carro
    const addItem = (product) => {
        const newItem = product
        setCart((prevState) => [...prevState, newItem])
    };

    //Elimina un item del carro
    const removeItem = (product) => {
        const [, index] = isInCart(product)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart([...newCart])
    };

    //Vaciar el carro
    const clear = () => {
        setCart([]);
    };

    // Precio Total del Carrito
    const getTotal = () => {
        if(cart.length !== 0) 
            return cart.reduce((acc, product) => {
                return acc += product.price 
            }, 0)
        return 0
    };


    //Cantidad de productos
    const cartQuantity = () => {
        if(cart.length === 0) 
            return 0

        let quantity = 0
        cart.map((item) => {
            quantity += 1
        })
        return quantity
    }

    //Finalizar compra
    const buyProducts = () => {
        if(getTotal() <= cash) {
            setCash((prevState) => {
                return prevState - getTotal()
            })
            setCart([])
            setInfoMessage("succes")
            navigate('/estadoDeCompra')
        } else {
            setInfoMessage("error")
            navigate('/estadoDeCompra')
        }
    }

    const value = { cart, cash, addItem, removeItem, clear, isInCart, cartQuantity, getTotal, buyProducts, infoMessage };
    
    return <CartContext.Provider value={value}> { children } </CartContext.Provider>;
}; 

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error('useCart debe userse desde dentro de un CartProvider')
    };
    return context;
};
