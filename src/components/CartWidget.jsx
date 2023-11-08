import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <>
            <Link to='/cart' className="cartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }} >
                <div className='widget'>
                    <div className="shopping-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    {totalQuantity}
                </div>
            </Link>
        </>
    )
}

export default CartWidget