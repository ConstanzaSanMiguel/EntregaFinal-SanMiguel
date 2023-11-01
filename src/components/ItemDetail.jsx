import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Image, Heading, Text, Stack, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    /*    const { id } = useParams()
    
        const filteredProduct = product.filter((producto) => producto.id === id)
        console.log(filteredProduct)*/

        console.log(product)
        console.log(`${product.name}-${product.id}-${product.description}- ${product.price} `)

    return (
        <>
            <Card maxW='sm' variant='outline' align='center' margin={1} display='flex' >
                <CardBody>
                    <Image /> <p>Image here</p>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' fontSize='2xl'>{product.name}</Heading>
                    </Stack>
                    <Text>
                        #{product.id}, {product.description}
                    </Text>
                    <Text>
                        ${product.price}
                    </Text>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2' mt={1} >
                        <ItemCount product={product} />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemDetail