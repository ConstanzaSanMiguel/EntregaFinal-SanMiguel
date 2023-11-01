import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import '../css/cart.css'

const Cart = (prods) => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

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
        <>
            <h1 className='inCartTitle'>Cart</h1>
            {console.log(prods)}
            <div className='inCart'>
                {cart.map((product) => (
                    <div key={product.id} className="productInCart">
                        <div className='productInCartDescription'>
                            <p>{product.name} - Price per unit: ${product.price}</p>
                            <div className='productInCartSub'>
                                <p>Quantity: {product.quantity} </p>
                                <p><b>Subtotal: ${product.price * product.quantity}</b></p>
                            </div>
                        </div>
                        <Button variant='outline' colorScheme='red' size='sm' onClick={() => removeItem(product.id)}>Delete item</Button>
                    </div>
                ))}
            </div>
            <h3 className='totalCart'>Total: ${total} </h3>
            <ButtonGroup className='buttonsCart'>
                <Button variant="solid" colorScheme="red" marginTop={2} onClick={() => clearCart()}>
                    Clear cart
                </Button>
                <Button variant="solid" colorScheme="whatsapp" borderColor="#ccd0d5" _hover={{ borderColor: 'teal' }} marginTop={2}>
                    <Link to='/checkout'>Checkout</Link>
                </Button>
                <Button variant='solid' colorScheme='teal' marginTop={2} >
                        <Link to='/' > Back home </Link>
                    </Button>
            </ButtonGroup>
        </>
    )
}

export default Cart
