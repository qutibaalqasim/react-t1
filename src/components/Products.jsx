import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
export default function Products() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

   useEffect(()=>{
     getProducts();
   },[]);
  return (
    <div className="container">
        <div className="row">
            {products.map((product)=>{
                return(
                    <div className='col-lg-3'>
                        <div className='card text-center mt-2'>
                            <h2 className={`${style.phontSize}`}>{product.title.split(" ").slice(0,3).join(" ")}</h2>
                            <img src={product.image} alt={product.title}/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
