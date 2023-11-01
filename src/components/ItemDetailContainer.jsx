import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import '../css/itemlist.css'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "kpop-albums", `${id}`)

        getDoc(oneItem)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const docs = snapshot.data()
                    setProduct(docs)
                }
            })
    }, [])

    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='center'  >
                <ItemDetail products={product} />
            </Box>
        </>
    )
}

export default ItemDetailContainer