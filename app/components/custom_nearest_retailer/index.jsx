import React from 'react'
import {Box, Button, Center, Container, Flex, Grid, GridItem, Image, Text} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {ArrowForwardIcon} from '@chakra-ui/icons'

const NearestRetailer = () => {
    return (
        <section>
            <Box bg="#F8F9F9" w="100%">
                <Container py={8}>
                    <Box display="flex" flexDirection={{base: 'column-reverse', md: 'row'}}>
                        <Box
                            className="box"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            w={{base: '100%', md: '50%'}}
                        >
                            <Box mb={4}>
                                <Text fontSize="2xl" as="b">
                                    FIND YOUR NEAREST RETAILER
                                </Text>
                            </Box>
                            <Box mb={6}>
                                <Text fontSize="sm">
                                    For sales, expert advice and support find a retailer near you
                                </Text>
                            </Box>

                            <Button
                                w="180px"
                                bg="#0C121C"
                                _hover={{
                                    bg: 'white',
                                    color: 'black',
                                    border: '1px solid black'
                                }}
                            >
                                <ArrowForwardIcon />
                                <Text fontSize="xs" ms={2}>
                                    FIND A RETAILER
                                </Text>
                            </Button>
                        </Box>

                        <Center w={{base: '100%', md: '50%'}}>
                            <Image
                                src={getAssetUrl('static/img/jlr/ownership_castrol_oil_HTB.webp')}
                            />
                        </Center>
                    </Box>
                </Container>
            </Box>
        </section>
    )
}

export default NearestRetailer
