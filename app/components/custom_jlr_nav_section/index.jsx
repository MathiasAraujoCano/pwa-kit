import React from 'react'
import {Box, Container, Grid, GridItem, Text, Icon, Button, Center} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {items} from './items'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {useState} from 'react'

const CustomJLRNavSection = () => {
    // const [state, setState] = useState(true)
    return (
        <section>
            {/* <Center my={10}>
                <Button onClick={() => setState((prev) => !prev)}>
                    {state ? 'True' : 'False'}
                </Button>
            </Center> */}
            <Box bg="#F8F9F9">
                <Container my={10} p={{md: 0}}>
                    <Grid templateColumns="repeat(4, 1fr)">
                        {items.map((item) => {
                            return (
                                <GridItem
                                    colSpan={{base: 4, md: 2, xl: 1}}
                                    w="100%"
                                    h={{md: '13rem'}}
                                    p={{base: 0, md: 10}}
                                    key={item.id}
                                    borderRight={{
                                        base: 0,
                                        md: [1, 3].includes(item.id) && '1px solid grey',
                                        xl: item.id < 4 && '1px solid grey'
                                    }}
                                    borderBottom={{base: '1px solid grey', xl: '0px'}}
                                >
                                    <Link>
                                        <Box
                                            display={{base: 'flex', md: 'block'}}
                                            alignItems="center"
                                        >
                                            <Box mb={{base: 0, md: 2}}>
                                                <Icon
                                                    as={item.icon}
                                                    boxSize={{base: '1.5rem', md: '3rem'}}
                                                />
                                            </Box>
                                            <Box my={2} display="flex" alignItems="center">
                                                <ChevronRightIcon />
                                                <Text as="b" ms={2}>
                                                    {item.link}
                                                </Text>
                                            </Box>
                                            <Box display={{base: 'none', md: 'flex'}}>
                                                <Text fontSize="sm">{item.body}</Text>
                                            </Box>
                                        </Box>
                                    </Link>
                                </GridItem>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </section>
    )
}

export default CustomJLRNavSection
