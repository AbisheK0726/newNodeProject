import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {Product} from './Product.js'
import {ErrorMsg} from '../ErrorMsg'

export const Products = () => {
    const [products,setProducts] = useState();
    
    const [error, setError] = useState();
    
    useEffect(() =>{
        const getProducts = async () => {
            try {
                const allProducts = await Axios.get("/products")
                setProducts(allProducts.data.data)
                
            } catch (error) {
                error.response.data.error.message && setError(error.response.data.error.message);
            }
        }
        getProducts();

    }, []);

   
    return(
        <>
       <h1>Products</h1>
        <div className ="products">
        {products?(
            products.map(product =>(
            <Link to={"/products/" +product._id}>
                <Product key = {product._id} product= {product} />
            </Link>
            ))

            ) : (
                <h1>No Product</h1>
                )}

    </div>
    </>
    )
}