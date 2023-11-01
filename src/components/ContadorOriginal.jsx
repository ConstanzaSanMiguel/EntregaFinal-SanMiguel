import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Box, ButtonGroup } from '@chakra-ui/react'
import '../css/contador.css'
import { CartContext } from '../context/CartContext'

const Contador = (prods) => {

    const [contador, setContador] = useState(0);

    const addToCart = () => {
        console.log(`${contador} ${prods.prods} added to the cart`);
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
            <Button variant='ghost' colorScheme='teal' borderColor='#ccd0d5' _hover={{ borderColor: 'teal' }} onClick={addToCart} marginTop={2}>
                Add to cart</Button>
        </Box>
    )
}

export default Contador