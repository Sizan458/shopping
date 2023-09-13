import PropTypes from'prop-types'

const Cart2 = ({cart}) => {
    const{title,image}=cart
    return (
        <div className=' bg-red-200 '>
            <h3 className='text-xl bg-slate-300  p-3 m-3 rounded'>{title}</h3>
            <h2><img src={image}/></h2>
        </div>
    );
};
Cart2.PropTypes={
 cart: PropTypes.object
}
export default Cart2;