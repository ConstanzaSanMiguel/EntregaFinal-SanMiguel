import React from 'react'
import { Card, CardBody, Flex, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, image, id, price }) => {
    return (
        <>
            <Flex minWidth='max-content' flexDirection='row' flexWrap='wrap'>
                <Card w='400px' h='250px' maxW='sm' variant='outline' align='center' margin={1} display='flex' >
                    <CardBody>
                        <Image /> <p>Image here</p>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' fontSize='2xl'>{name}</Heading>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2' mt={1} >
                            <Button variant='outline' colorScheme='red' fontSize='sm' _hover={{ borderColor: '#FF6060' }}>
                                <Link to={`/product/${id}`}>
                                    View more
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Flex>
        </>
    )
}

export default Item