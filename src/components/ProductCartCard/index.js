import React from 'react'

//Context
import { useCart } from "context/CartContext"

//Style
import "./ProductCartCard.css"

const ProductCartCard = ({ data:product }) => {
    const { title, price } = product
    const { removeItem } = useCart()

    return (
        <div className="cardCartContainer">
            <div className="firstDiv">
                <img src={require(`../../assets/img/imageProduct.jpg`)} alt="imagen del producto" />
                <p className="">{ title }</p>
            </div>
            <div className="secondDiv">
                <p className="">$ { price }</p>
                <button onClick={() => removeItem(product)}> X </button>
            </div>
        </div>
    )
}

export default ProductCartCard
