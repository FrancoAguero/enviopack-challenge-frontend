import React from 'react'

//React-router-dom
import { useNavigate } from "react-router-dom"

//Context
import { useCart } from "context/CartContext"

//Style
import "./ProductCard.css"

const ProductCard = ({ data:product }) => {
    const { title, price } = product
    const { isInCart, addItem } = useCart()
    const [ flag ] = isInCart(product)
    const navigate = useNavigate()
    
    return (
        <div className="cardContainer">
            <img src={require(`../../assets/img/imageProduct.jpg`)} alt="imagen del producto" />
            <p className="">{ title }</p>
            <p className="">$ { price }</p>
            { !flag ? 
                <button className="button" onClick={() => addItem(product)}> Agregar al carrito </button> 
                :
                <button className="button" onClick={() => navigate("/cart")}> Ver carrito </button> 
            }
        </div>
    )
}

export default ProductCard
