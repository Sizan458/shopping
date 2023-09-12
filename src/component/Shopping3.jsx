
import PropTypes from 'prop-types';

const Shopping3 = ({product}) => {
    console.log(product)
    return (
        <div  className='grid grid-cols-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={product.image
} alt="Shoes"  className='w-[320px] h-[270px]'/></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
         
    );
};
Shopping3.propTypes={product:PropTypes.object}
export default Shopping3;