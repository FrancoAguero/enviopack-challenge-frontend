import React, { useEffect, useState } from 'react'

//Component
import ProductCard from "components/ProductCard";

//Mocks
import productData from "mocks/products.json";

//Style
import "./ProductList.css"


const ProductsList = () => {
    const { productos:products } = productData
    const [data, setData] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [orderBy, setOrderBy] = useState(0);
    const [search, setSearch] = useState("");
    
    const handleNextPage = () => {
        setCurrentPage( currentPage + 5 )
    }

    const handlePrevPage = () => {
        if( currentPage > 0 )
            setCurrentPage( currentPage - 5 )
    }

    const handleSearch = ({ target }) => {
        setCurrentPage( 0 )
        setSearch( target.value )
    }

    const handleOrder = ({ target }) => {
        setOrderBy(parseInt(target.value))
    }

    const sortProducts = (productsToSort) => {
        if(orderBy === 0){
            setData([...productsToSort.sort(function(a , b) { return a.id - b.id })])
        } else if(orderBy === 1){
            setData([...productsToSort.sort(function(a , b) { return a.price - b.price })])
        }else if(orderBy === 2){
            setData([...productsToSort.sort(function(a , b) { return b.price - a.price })])
        }
    }

    useEffect(() => {
        if(search.length === 0){
            sortProducts(products)
        } else {
            const filtered = products.filter(( product ) => product.title.toUpperCase().includes( search.toUpperCase() ))
            sortProducts(filtered)
        }
    }, [search, orderBy]);

    return (
        <div className="productLisContainer">
            <div className="filtersContainer">
                <input 
                    type="text" 
                    placeholder="Buscar productos por nombre" 
                    value={search}
                    onChange={handleSearch}
                />
                <select 
                    name="order" 
                    placeholder="Seleccionar" 
                    value={orderBy}
                    onChange={handleOrder}
                >
                    <option value={0}>Seleccionar</option>
                    <option value={1}>Mas baratos</option>
                    <option value={2}>Mas Caros</option>
                </select>
            </div>
            <div className="listContainer">
                {data.slice(currentPage, currentPage + 6).map(( product, index ) => (
                    <ProductCard 
                        key={product.id} 
                        data={product}
                    />
                ))}
            </div>
            <div className="paginationContainer">
                <button onClick={handlePrevPage} >Volver</button>
                <button onClick={handleNextPage}>Siguiente</button>
            </div>
        </div>
    )
}

export default ProductsList
