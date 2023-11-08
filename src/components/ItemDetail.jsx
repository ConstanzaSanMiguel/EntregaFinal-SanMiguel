import { Card, CardBody, Image, Heading, Text, Stack, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <>
            <Card maxW='sm' variant='outline' align='center' margin={1} display='flex' >
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' fontSize='2xl' className='productName'>{product.name}</Heading>
                    </Stack>
                    <Image className='productImage' /> <img src={product.image} alt="" />                   
                    <Text className='productDescription'>
                        {product.description}
                    </Text>
                    <Text className='productPrice'>
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