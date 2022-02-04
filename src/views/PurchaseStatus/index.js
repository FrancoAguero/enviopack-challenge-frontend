import React from 'react'

//Context
import { useCart } from "context/CartContext"

//React-router-dom
import { useNavigate } from "react-router-dom"

//Style
import "./PurchaseStatus.css"

const PurchaseStatus = () => {
    const  { infoMessage } = useCart()
    const navigate = useNavigate()
    
    return (
        <div className="purchaseStatusContainer">
            <h1>Estado de la compra</h1>
            { infoMessage === "succes" ? (
                <div className="purchaseStatusCard">
                    <p>
                        La compra se realizó con éxito
                    </p>
                    <button onClick={() => navigate('/')}> Volver al catalogo</button>
                </div>
            ) : (
                <div className="purchaseStatusCard">
                    <p>
                        Ocurrió un error con la compra,
                        revisá que el importe no supere el crédito disponible en tu cuenta
                    </p>
                    <button onClick={() => navigate('/cart')}> Volver al carrito</button>
                </div>
            )}
        </div>
    )
}

export default PurchaseStatus
