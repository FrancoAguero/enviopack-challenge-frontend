import React, { useState } from 'react';

//JSON data
import profileData from "mocks/profile.json"

//Context
import { useCart } from "context/CartContext"

//React-router-dom
import { Link } from "react-router-dom"

//Style
import "./NavBar.css";

const NavBar = () => {
    const { firstName } = profileData.profile
    const { cash, cartQuantity } = useCart()

    return (
        <div className="navContainer">
            <ul className="navListContainer">
                <li> <Link to="/"> Tienda de Productos </Link> </li>
                <div className="navlistData">
                    <li>{ firstName }</li>
                    <li> <Link to="/cart"> Carrito ({ cartQuantity() }) </Link> </li>
                    <li>Credito $ { cash } </li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar
