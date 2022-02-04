import React from 'react'

//Components
import ProductsList from 'components/ProductList';

//Style
import "./Home.css"

const Home = () => {
    return (
        <div className="homeContainer">
            <h1>Catálogo</h1>
            <ProductsList />
        </div>
    )
}

export default Home
