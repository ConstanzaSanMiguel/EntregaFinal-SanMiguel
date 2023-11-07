import CartWidget from './CartWidget'
import '../css/navbar.css'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import imageLogo from '../images/vibelogo.png'

const Navbar = () => {
    const basicNavbarStyle = {
        background: '#333',
    }

    return (
        <>
            <Flex className='menu'>
                <Box>
                    <Link to={"/"}>
                        <img className='logoVibe' src={imageLogo} alt="Vibe logo" />
                    </Link>
                </Box>
                <Spacer />
                <Box className='navbar'>
                    <Menu className='nav-menu'>
                        <MenuButton className='nav-item' border='none'>
                            Kpop albums<i className="fa-solid fa-angle-down"></i>
                        </MenuButton>
                        <MenuList sx={basicNavbarStyle}>
                            <Link to={`/category/${'Group'}`}>
                                <MenuItem sx={basicNavbarStyle} className='dropdown-content'  _hover={{ borderColor: '#333' }}>Shop by group</MenuItem>
                            </Link>
                            <Link to={`/category/${'Solo'}`}>
                                <MenuItem sx={basicNavbarStyle} className='dropdown-content'  _hover={{ borderColor: '#333' }}>Shop by solo artists</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex >
        </>
    )
}

export default Navbar