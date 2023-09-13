import { useEffect } from "react";
import { useState } from "react";
import Shopping3 from "./Shopping3";
import PropTypes from'prop-types'


const Shopping2 = ({handleCart}) => {
    const [product,setProduct]= useState([])
   

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[])
    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          {
            product.map(product =><Shopping3 key={product.id} product={product} handleCart={handleCart} ></Shopping3> )
          }
        </div>
    );
};
Shopping2.propTypes = {
  handleCart: PropTypes.func,
  
}
export default Shopping2;