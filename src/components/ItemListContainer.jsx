import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import '../css/itemlist.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { category } = useParams()
    const [categoryFilteredProducts, setCategoryFilteredProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "kpop-albums")
        getDocs(itemsCollection)
            .then((snapshot) => {
                const docs = snapshot.docs.map((doc) => doc.data())
                console.log(docs)
                setProducts(docs)
            })
            .catch((error) => {
                console.error("Error fetching products:", error)
            })
    }, [])

    useEffect(() => {
        if (category) {
            const filtered = products.filter((producto) => producto.category === category)
            setCategoryFilteredProducts(filtered)
        } else {
            setCategoryFilteredProducts(products)
        }
    }, [category, products])

    return (
        <>
            <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-around' gap='20px'>
                <ItemList products={categoryFilteredProducts} />
            </Box>
        </>
    )
}


export default ItemListContainer