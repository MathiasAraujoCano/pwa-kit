import {Box, Container, Grid, GridItem, Image, Text} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import React from 'react'

const LiveShowcase = () => {
    return (
        <section>
            <Container mb={16}>
                <Box my={16}>
                    <Text fontSize="4xl" as="b">
                        LIVE SHOWCASE
                    </Text>
                </Box>
                <Grid
                    // templateRows="repeat(3, 1fr)"
                    templateColumns={{base: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)'}}
                    gap={2}
                >
                    <GridItem h="400px" rowSpan={2} colSpan={{base: 4, sm: 2}}>
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/car-outside-white.webp')}
                        />
                    </GridItem>
                    <GridItem
                        h="200px"
                        rowSpan={1}
                        colSpan={1}
                        display={{base: 'none', sm: 'block'}}
                    >
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/car-outside-red-2.webp')}
                            display={{base: 'none', sm: 'block'}}
                        />
                    </GridItem>
                    <GridItem
                        h="200px"
                        rowSpan={1}
                        colSpan={1}
                        display={{base: 'none', sm: 'block'}}
                    >
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/car-outside-red.webp')}
                            display={{base: 'none', sm: 'block'}}
                        />
                    </GridItem>
                    <GridItem
                        h="400px"
                        rowSpan={2}
                        colSpan={2}
                        display={{base: 'none', md: 'block'}}
                    >
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/van-outside-poseidon.webp')}
                        />
                    </GridItem>
                    <GridItem
                        h="400px"
                        rowSpan={2}
                        colSpan={2}
                        display={{base: 'none', sm: 'block'}}
                    >
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/car-red-something.webp')}
                            display={{base: 'none', sm: 'block'}}
                        />
                    </GridItem>
                    <GridItem h="200px" rowSpan={1} colSpan={{base: 2, sm: 1}}>
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            bg="red"
                            src={getAssetUrl(
                                'static/img/jlr/showcase/car-outside-looking-out-window.webp'
                            )}
                        />
                    </GridItem>
                    <GridItem h="200px" rowSpan={1} colSpan={{base: 2, sm: 1}}>
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            bg="blue"
                            src={getAssetUrl('static/img/jlr/showcase/car-inside-front.webp')}
                        />
                    </GridItem>
                    <GridItem
                        h="200px"
                        rowSpan={1}
                        colSpan={1}
                        display={{base: 'none', md: 'block'}}
                    >
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/van-outside-moises.webp')}
                        />
                    </GridItem>
                    <GridItem
                        h="200px"
                        rowSpan={1}
                        colSpan={1}
                        display={{base: 'none', md: 'block'}}
                    >
                        <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={getAssetUrl('static/img/jlr/showcase/looking-out-the-window.webp')}
                        />
                    </GridItem>
                </Grid>
            </Container>
        </section>
    )
}

export default LiveShowcase
