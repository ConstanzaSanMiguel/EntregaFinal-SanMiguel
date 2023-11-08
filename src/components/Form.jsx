import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import '../css/form.css'

const Form = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order)
            .then(({ id }) => setOrderId(id))
        alert('Thanks for the purchase!')
        setTimeout(() => { // el setTimeout está para que se vea la orden de compra antes de que se borre el carrito
            clearCart();
        }, 5000)
    }

    const order = {
        buyer: {
            name,
            surname,
            email,
            total
        },
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
        }))
    }

    const ordersCollection = collection(db, "MyOrder")

    return (
        <>
            <div className='form'>
                <h1>Purchase Order Form</h1>
                <form className='orderForm' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} />
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <Button variant="solid" colorScheme="teal" marginTop={5} type='submit' className='submitForm'> Send </Button>
                </form>
                <p className='orderID'>Order ID: {orderId} </p>
            </div>
        </>
    )
}

export default Form