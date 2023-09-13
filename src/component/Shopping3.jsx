
import PropTypes from 'prop-types';

const Shopping3 = ({product,handleCart}) => {
    
    return (
        <div  >
            <div className=" card  bg-base-100 shadow-xl "onClick={()=>handleCart(product)} >
  <figure><img src={product.image
} alt="Shoes"  className='w-[320px] h-[170px]'/></figure>
  <div className="card-body">
    <h2 className="card-title ">{product.title}</h2>
    <h2 className='text-2xl'>Rate:{product.rating.rate}</h2>
    <h2 className='text-2xl'>Available:{product.rating.count}</h2>
    <h2 className='text-2xl'>Price: {product.price}</h2>
    <h2 className='text-xl '>Description:</h2>
    <p >{product.description}</p>
   
    <h3></h3>
    
  </div>
</div>
        </div>
         
    );
};
Shopping3.propTypes={
  product:PropTypes.object,
  handleCart:PropTypes.func
}
export default Shopping3;