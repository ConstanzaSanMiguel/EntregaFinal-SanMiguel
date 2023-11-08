import CartWidget from './CartWidget'
import { Menu, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
    const basicNavbarStyle = {
        background: '#333',
    }

    return (
        <>
            <Flex className='menu'>
                <Box>
                    <Link to={"/"}>
                        <img className='logoVibe' src='https://firebasestorage.googleapis.com/v0/b/vibe-kpop.appspot.com/o/vibelogo.png?alt=media&token=963f7853-dde2-4c70-ba3c-902772596569&_gl=1*1ylj9p9*_ga*MTIyMTg5MTMzMi4xNjk4NzkxOTAy*_ga_CW55HF8NVT*MTY5OTM5Njg3OC4xNC4xLjE2OTkzOTg2NjIuMjkuMC4w' alt="Vibe logo" />
                    </Link>
                </Box>
                <Spacer />
                <Box className='navbar'>
                    <Menu className='nav-menu'>
                            <Link to={`/category/${'Group'}`}>
                                <MenuItem sx={basicNavbarStyle} className='dropdown-content' _hover={{ borderColor: '#333' }}>Shop by group</MenuItem>
                            </Link>
                            <Link to={`/category/${'Solo'}`}>
                                <MenuItem sx={basicNavbarStyle} className='dropdown-content' _hover={{ borderColor: '#333' }}>Shop by solo artists</MenuItem>
                            </Link>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <CartWidget/>
                </Box>
            </Flex >
        </>
    )
}

export default Navbar