import { useContext, useState } from 'react'
import { Button, Box, ButtonGroup } from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../css/contador.css'

const ItemCount = ({ product }) => {
    const [contador, setContador] = useState(0)
    const { addItem } = useContext(CartContext)
    const [addedToCart, setAddedToCart] = useState(false)

    const handleAddToCart = () => {
        if (contador > 0) {
            addItem(product, contador)
            setAddedToCart(true)
        }
    }

    return (
        <Box className='cartButtons'>
            <ButtonGroup>
                <Button fontSize='sm' variant='outline' colorScheme='red' onClick={() => setContador(contador - 1)} isDisabled={contador === 0} _hover={{ borderColor: '#FF6060' }}>
                    -
                </Button>
                <Button textShadow='1.5px 1.4px #FFB2B2' fontSize='19px' variant='none' color='#9E0000' border='none' _hover={{ bg: 'none' }} m={1}>
                    {contador}
                </Button>
                <Button fontSize='sm' variant='outline' colorScheme='red' onClick={() => setContador(contador + 1)} m={1} _hover={{ borderColor: '#FF6060' }} marginTop={0}>
                    +
                </Button>
            </ButtonGroup>
            {addedToCart ? (
                <div>
                    <Link to="/cart">
                        <Button variant="outline" colorScheme="red" borderColor="#ccd0d5" _hover={{ borderColor: 'red' }} marginTop={2} className='goToCart'>
                            Go to cart
                        </Button>
                        <p className='productAdded'>
                            {`${contador} product(s) added to cart!`}
                        </p>
                    </Link>
                </div>
            ) : (
                <Button variant='solid' colorScheme='teal' borderColor='#ccd0d5' _hover={{ borderColor: 'teal' }} onClick={handleAddToCart} marginTop={2}>
                    Add to cart
                </Button>
            )}
        </Box>
    )
}

export default ItemCount
