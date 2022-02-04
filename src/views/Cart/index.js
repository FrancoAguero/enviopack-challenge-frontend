import React from 'react'

//Components
import CartList from "components/CartList"

//Style
import "./Cart.css"

const Cart = () => {
    return (
        <div className="cartContainer">
            <h1>Carrito</h1>
            <CartList />
        </div>
    )
}

export default Cart

