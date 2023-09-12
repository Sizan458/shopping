import { useEffect } from "react";
import { useState } from "react";
import Shopping3 from "./Shopping3";


const Shopping2 = () => {
    const [product,setProduct]= useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[])
    return (
        <div className='grid grid-cols-3 gap-6 '>
          {
            product.map(product =><Shopping3 key={product.id} product={product}></Shopping3> )
          }
        </div>
    );
};

export default Shopping2;