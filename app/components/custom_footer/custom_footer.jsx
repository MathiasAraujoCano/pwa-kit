import {Box, Container, Flex, Grid, GridItem, List, ListItem, Text, Icon} from '@chakra-ui/react'
import {botNavItems, conversationItems, items} from './items'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import {FaFacebookSquare} from 'react-icons/fa'
// import './customFooter.css'

const CustomFooter = () => {
    return (
        <>
            <section>
                <Box bg="#4a4f54">
                    <Container>
                        <Grid templateColumns="repeat(4, 1fr)" py={4}>
                            <GridItem colSpan={1} display={{base: 'none', md: 'block'}} p={2}>
                                {items.map((item) => {
                                    return (
                                        item.id < 3 && (
                                            <Box key={item.id}>
                                                <Box my="2.5rem">
                                                    <Text
                                                        color="white"
                                                        letterSpacing="widest"
                                                        fontSize="12px"
                                                        fontWeight="600"
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                                <List>
                                                    {item.items.map((subitem, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Box my={5}>
                                                                    <Link>
                                                                        <Text
                                                                            color="#acb6bf"
                                                                            fontSize="10px"
                                                                            letterSpacing="widest"
                                                                            fontWeight="600"
                                                                        >
                                                                            {subitem}
                                                                        </Text>
                                                                    </Link>
                                                                </Box>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </List>
                                            </Box>
                                        )
                                    )
                                })}
                            </GridItem>
                            <GridItem colSpan={1} display={{base: 'none', md: 'block'}} p={2}>
                                {items.map((item) => {
                                    return (
                                        item.id >= 3 &&
                                        item.id < 5 && (
                                            <Box key={item.id}>
                                                <Box my="2.5rem">
                                                    <Text
                                                        color="white"
                                                        letterSpacing="widest"
                                                        fontSize="12px"
                                                        fontWeight="600"
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                                <List>
                                                    {item.items.map((subitem, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Box my={5}>
                                                                    <Link>
                                                                        <Text
                                                                            color="#acb6bf"
                                                                            fontSize="10px"
                                                                            letterSpacing="widest"
                                                                            fontWeight="600"
                                                                        >
                                                                            {subitem}
                                                                        </Text>
                                                                    </Link>
                                                                </Box>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </List>
                                            </Box>
                                        )
                                    )
                                })}
                            </GridItem>
                            <GridItem colSpan={1} display={{base: 'none', md: 'block'}} p={2}>
                                {items.map((item) => {
                                    return (
                                        item.id >= 5 && (
                                            <Box key={item.id}>
                                                <Box my="2.5rem">
                                                    <Text
                                                        color="white"
                                                        letterSpacing="widest"
                                                        fontSize="12px"
                                                        fontWeight="600"
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                                <List>
                                                    {item.items.map((subitem, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Box my={5}>
                                                                    <Link>
                                                                        <Text
                                                                            _hover={{
                                                                                textDecoration:
                                                                                    'underline'
                                                                            }}
                                                                            color="#acb6bf"
                                                                            fontSize="10px"
                                                                            letterSpacing="widest"
                                                                            fontWeight="600"
                                                                        >
                                                                            {subitem}
                                                                        </Text>
                                                                    </Link>
                                                                </Box>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </List>
                                            </Box>
                                        )
                                    )
                                })}
                            </GridItem>
                            <GridItem colSpan={{base: 4, md: 1}} p={2}>
                                <Box my={{base: '1rem', md: '2.5rem'}}>
                                    <Text
                                        color="white"
                                        letterSpacing="widest"
                                        fontSize="12px"
                                        fontWeight="600"
                                    >
                                        {conversationItems.title}
                                    </Text>
                                </Box>
                                <List
                                    w="100%"
                                    display="flex"
                                    flexDirection={{base: 'row', md: 'column'}}
                                    justifyContent="space-between"
                                >
                                    {conversationItems.items.map((item, i) => {
                                        return (
                                            <ListItem key={i} my={3}>
                                                <Link>
                                                    <Flex alignItems="center">
                                                        <Box
                                                            w="50px"
                                                            h="50px"
                                                            display="flex"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            me={{base: '6px', md: '1rem'}}
                                                        >
                                                            {/* <FontAwesomeIcon
                                                                icon={item.icon}
                                                                color="white"
                                                                className="fa-sm"
                                                            /> */}
                                                            <Icon
                                                                as={item.icon}
                                                                color="white"
                                                                boxSize="2rem"
                                                            />
                                                        </Box>
                                                        <Box
                                                            h="100%"
                                                            display="flex"
                                                            alignItems="center"
                                                        >
                                                            <Text
                                                                _hover={{
                                                                    textDecoration: 'underline'
                                                                }}
                                                                color="white"
                                                                letterSpacing="widest"
                                                                fontSize="12px"
                                                                fontWeight="600"
                                                                display={{
                                                                    base: 'none',
                                                                    sm: 'block'
                                                                }}
                                                            >
                                                                {item.title}
                                                            </Text>
                                                        </Box>
                                                    </Flex>
                                                </Link>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>
            </section>
            <section>
                <Box borderBottom="1px" borderColor="#4a4f54">
                    <nav>
                        <Container py={5}>
                            <List display="flex" flexDirection={{base: 'column', lg: 'row'}}>
                                {botNavItems.map((item, i) => {
                                    return (
                                        <ListItem key={i} me="2rem" my={{base: '1rem', lg: '0px'}}>
                                            <Link>
                                                <Text
                                                    _hover={{
                                                        textDecoration: 'underline'
                                                    }}
                                                    letterSpacing="widest"
                                                    fontSize="11px"
                                                    fontWeight="600"
                                                    color="#4a4f54"
                                                >
                                                    {item}
                                                </Text>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Container>
                    </nav>
                </Box>
            </section>
            <section>
                <Container>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        © JAGUAR LAND ROVER LIMITED 2023
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        28 Victoria Link, Route 21 Corporate Park, Nellmapius Drive,
                        <br /> Irene X30, Centurion, Tshwane, Gauteng, <br />
                        South Africa
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        Smart Settings is intended to be released as part of a future wireless
                        software update. Software development and releases are subject to movements
                        in planning and programming, and dates may be subject to change.
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        All derivatives of Defender and Velar are available to order now. Please
                        refer to your retailer for more detail on customer deliveries of Plug-in
                        Hybrid models when placing your order.
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        “Recommended Retail Prices shown includes VAT, CO2 Tax , registration and
                        Retailer fitting costs (if required). Recommended Retail Prices are subject
                        to change without notice and include a 5 year/100,000km Maintenance Plan and
                        Roadside Assistance. Vehicles in retailer stock might differ from the
                        website. Please consult your local Retailer for stock vehicle
                        specifications. Standard Terms and Conditions apply. Vehicle standard
                        features and options reflect current model year specifications“.
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        <b>Important note on imagery & specification</b>. We are living through
                        exceptional times. Due to the Covid pandemic we have been prevented or
                        delayed in the creation of new images of current model years. Now the global
                        impact of micro-chip shortages is further affecting build specifications,
                        options and launch timings. Until this unique event settles, please note
                        that many images cannot be updated to 22/23/23.5 model year specifications.
                        Features, options, trim and colour schemes will differ from many images.
                        Customers are urged to consult your local Retailer for detailed 22/23/23.5
                        model year specifications and do not base an order on marketing imagery and
                        specification alone.
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        Jaguar Land Rover Limited is constantly seeking ways to improve the
                        specification, design and production of its vehicles, parts and accessories
                        and alterations take place continually, and we reserve the right to change
                        without notice. Some features may vary between optional and standard for
                        different model years. The information, specification, engines and colours
                        on this website are based on European specification and may vary from market
                        to market and are subject to change without notice. Some vehicles are shown
                        with optional equipment and retailer-fit accessories that may not be
                        available in all markets. Please contact your local retailer for local
                        availability and prices.
                    </Text>
                    <Text my="1rem" fontSize="9px" letterSpacing="widest" color="#4A4F54">
                        The mapping on this website is provided by external mapping providers and is
                        for general information purposes only.
                    </Text>
                </Container>
            </section>
        </>
    )
}

export default CustomFooter
