import { Box, Spinner } from '@chakra-ui/react'
import '../css/itemlist.css'

const Loader = () => {
    return (
        <>
            <Box className='loading'>
                <Spinner size='xl'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='red.500'
                />
                <h1>Just a little bit more!</h1>
                <h1>Your kpop dream is loading...</h1>
            </Box>
        </>
    )
}

export default Loader