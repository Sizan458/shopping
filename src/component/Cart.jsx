import PropTypes from'prop-types'

const Cart = ({cart}) => {
    return (
        <div className='ml-6 text-center' >
            <h2>CArt:{cart.length}</h2>
        </div>
    );
};
Cart.PropTypes={
    cart: PropTypes
}
export default Cart;