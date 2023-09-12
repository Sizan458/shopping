import { useEffect } from "react";
import { useState } from "react";


const Shopping2 = () => {
    const [product,setProduct]= useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[])
    return (
        <div>
            <h4>product:{product.length}</h4>
        </div>
    );
};

export default Shopping2;