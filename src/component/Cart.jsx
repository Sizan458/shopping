import PropTypes from'prop-types'
import Cart2 from './Cart2';

const Cart = ({cart}) => {
    return (
        <div className='ml-6 text-center' >
            <h2>CArt:{cart.length}</h2>
            {
           cart.map(cart=><Cart2 key={cart.id} cart={cart}></Cart2>)
            }
        </div>
    );
};
Cart.PropTypes={
    cart: PropTypes.array
}
export default Cart;