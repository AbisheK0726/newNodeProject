import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import { Product } from './Product';
import {Link} from 'react-router-dom';
import {ErrorMsg} from '../ErrorMsg'


export const ViewProduct = (props) => {

    const [product, setProduct] = useState({
        naem:'',
        description:'',
        price:''
    });
    
    const [error, setError] = useState();


    useEffect(() => {
        const getProduct = async () => {
            try {
                const product = await Axios.get("/products/"+ props.match.params.id)
                console.log(product.data.data)
                setProduct(product.data.data);
                
            } catch (error) {
                error.response.statusText && setError(error.response.statusText);
            }
        }
        getProduct();
    },[])

    const deleteProduct = async (id) => {
    try {
            await Axios.delete(`/products/${id}`)
               
    } catch (error) {
        error.response.statusText && setError(error.response.statusText);
    }}

    return(
        <div>
            {error &&(
                <ErrorMsg error={error} clearError={() => setError(undefined)}/>
            )}

            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
            <Link to={"/products/edit/"+product._id}>Edit</Link>
            <button onClick ={() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}