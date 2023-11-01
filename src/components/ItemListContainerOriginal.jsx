import { useEffect, useState } from 'react'
import '../css/itemlist.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'


const ItemListContainer = () => {
    const products = [
        { id: "1", name: "Love&Letter - SEVENTEEN", description: "Album", category: "Group", price: "11000" },
        { id: "2", name: "Treasure EP.FIN: All to action - ATEEZ", description: "Album", category: "Group", price: "11500" },
        { id: "3", name: "OUR TWENTY FOR - WINNER", description: "Album", category: "Group", price: "9500" },
        { id: "4", name: "BORDER:DAY ONE - ENHYPEN", description: "Album", category: "Group", price: "11000" },
        { id: "5", name: "The Dream Chapter: STAR - TXT", description: "Album", category: "Group", price: "10500" },
        { id: "6", name: "House on a Hill - Eric Nam", description: "Album", category: "Solo", price: "9500" },
        { id: "7", name: "Void - The Rose", description: "Album", category: "Group", price: "9000" },
        { id: "8", name: "ZERO : FEVER Part 1 - ATEEZ", description: "Album", category: "Group", price: "11500" },
        { id: "9", name: "Treasure EP.3: One To All - ATEEZ", description: "Album", category: "Group", price: "11500" },
        { id: "10", name: "RED - The Rose", description: "Album", category: "Group", price: "9200" },
        { id: "11", name: "130 Mood : TRBL - DEAN", description: "Album", category: "Solo", price: "9500" },
        { id: "12", name: "Take - SHAUN", description: "Album", category: "Solo", price: "9500" },
    ]

    const { category } = useParams()
    const [categoryFilteredProducts, setCategoryFilteredProducts] = useState([])

    useEffect(() => {
        if (category) {
            const filtered = products.filter((producto) => producto.category === category)
            setCategoryFilteredProducts(filtered)
        } else {
            setCategoryFilteredProducts(products)
        }
    }, [category])

    return (
        <>
            <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-around' gap='20px' >
                <ItemList products={categoryFilteredProducts} />
            </Box>
        </>
    )
}

export default ItemListContainer