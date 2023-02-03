import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

// setting state and getting data


const Shop = () => {
    const [products, setProducts]= useState([]);
    const[cart, setCart]= useState([]);
    useEffect ( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[]);

    // event handler
    const handleClick = (product) =>{
        console.log('product',product);
        const newCart=[...cart, product];
        setCart(newCart);
     }
    return (
        // shop details
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=> <Product key={product.id}
                    handleClick={handleClick}
                product={product}></Product>)
               }
            </div>
            {/* cart details */}
            <div className="cart-container"> 
           
            
            </div>
        </div>
    );
};

export default Shop;