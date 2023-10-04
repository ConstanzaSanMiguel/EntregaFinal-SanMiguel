import CartWidget from './CartWidget'
import '../css/navbar.css'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    const basicNavbarStyle = {
        background: '#333',
    }

    return (
        <>
            <Flex className='menu'>
                <Box>
                    <img src="src\images\vibelogo.png" alt="Vibe logo" />
                </Box>
                <Spacer />
                <Box className='navbar'>
                    <Menu className='nav-menu'>
                        <MenuButton className='nav-item'>
                            Kpop albums / merch / DVD<i className="fa-solid fa-angle-down"></i>
                        </MenuButton>
                        <MenuList sx={basicNavbarStyle}>
                            <MenuItem sx={basicNavbarStyle} className='dropdown-content'>Shop by group</MenuItem>
                            <MenuItem sx={basicNavbarStyle} className='dropdown-content'>Shop by solo</MenuItem>
                            <MenuItem sx={basicNavbarStyle} className='dropdown-content'>Hot groups</MenuItem>
                            <MenuItem sx={basicNavbarStyle} className='dropdown-content'>Official goods</MenuItem>
                            <MenuItem sx={basicNavbarStyle} className='dropdown-content'>Official lightsticks</MenuItem>
                            <MenuItem sx={basicNavbarStyle} className='dropdown-content'>Hot sale</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box className='nav-item'>
                    <i className="fa-solid fa-magnifying-glass fa-rotate-90 search-icon"></i>
                </Box>
                <Spacer />
                <Box>
                    <CartWidget />
                </Box>
            </Flex >
        </>
    )
}

export default Navbar