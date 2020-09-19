import React from 'react'

export const Product = ({product}) => {
    

    return(
    <div className="product">
       <h1>{product.name}</h1>
       <h3>{product.price}</h3>
    </div>
    )
}