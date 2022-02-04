import React, { useEffect, useState } from 'react'

//Component
import ProductCartCard from "components/ProductCartCard";

//React-router-dom
import { useNavigate } from "react-router-dom"

//Context
import { useCart } from "context/CartContext"

//Style
import "./CartList.css"


const CartList = () => {
    const { cart, getTotal, buyProducts } = useCart()
    const navigate = useNavigate()

    return (
        <div className="cartListContainer">
            {
                cart.length !== 0 ? (
                    <>
                        {cart?.map(( product, index ) => (
                            <ProductCartCard key={product.id} data={product} />
                        ))}
                        <div className="totalContainer">
                            <p>Total</p>
                            <p>$ {getTotal()}</p>
                        </div>
                        <div className="cartButtonsContainer"> 
                            <button onClick={() => navigate('/')}> Volver al catálogo </button>
                            <button onClick={() => buyProducts()}>Finalizar compra</button>
                        </div>
                    </>
                ) : <h3>No hay productos en el carro!</h3>
            }
        </div>
    )
}

export default CartList
