import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Form from './Form'
import '../css/cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

    const [showForm, setShowForm] = useState(false)

    const handleCheckoutClick = () => {
        setShowForm(true)
    }

    if (totalQuantity === 0) {
        return (
            <div className='noProducts'>
                <h1> <i>Oops!</i> No products in the cart!</h1>
                <div className='backToHome'>
                    <Button variant='solid' colorScheme='teal' >
                        <Link to='/' > Back to home </Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <div className="cart-content">
                <h1 className='inCartTitle'>Cart</h1>
                <div className='inCart'>
                    {cart.map((product) => (
                        <div className='cartDetail' key={product.id}>
                            <img src={product.image} alt={product.name} className='imageInCart'></img>
                            <div className="productInCart">
                                <div className='productInCartDescription'>
                                    <p>{product.name} - Price per unit: ${product.price}</p>
                                    <div className='productInCartSub'>
                                        <p>Quantity: {product.quantity} </p>
                                        <p><b>Subtotal: ${product.price * product.quantity}</b></p>
                                    </div>
                                </div>
                                <Button className='deleteButton' variant='outline' colorScheme='red' size='sm' onClick={() => removeItem(product.id)}>Delete item</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className='totalCart'>Total: ${total} </h3>
                <ButtonGroup className='buttonsCart'>
                    <Button variant="solid" colorScheme="red" marginTop={2} onClick={() => clearCart()}>
                        Clear cart
                    </Button>
                    <Button variant="solid" colorScheme="whatsapp" borderColor="#ccd0d5" _hover={{ borderColor: 'teal' }} marginTop={2} onClick={handleCheckoutClick}>
                        Checkout
                    </Button>
                </ButtonGroup>
            </div>
            {showForm && <Form />}
        </div>
    );
}

export default Cart;

