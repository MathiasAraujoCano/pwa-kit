import { Container, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../../components/jlr/carrousel/carousel'

import Grid from '../../components/jlr/grid'
import CustomJLRNavSection from '../../components/custom_jlr_nav_section'
import NearestRetailer from '../../components/custom_nearest_retailer'
import LiveShowcase from '../../components/custom_live_showcase'
//dummy data
import { families, vehicles, explore } from './dummy_data'
import RightMenu from '../../components/jlr/rightMenu'
import PointsMenu from '../../components/jlr/pointsMenu'

const jlr = () => {
    return (
        <>

            <Carousel />

            <CustomJLRNavSection />
            <Container>
                <Heading fontSize={25} fontFamily="AvenirNext, arial, helvetica, sans-serif" m={5}>
                    OUR FAMILIES
                </Heading>
                <Grid cards={families} />
                <Heading fontSize={25} fontFamily="AvenirNext, arial, helvetica, sans-serif" m={5}>
                    OUR VEHICLES
                </Heading>
                <Grid cards={vehicles} />
                <Heading fontSize={25} fontFamily="AvenirNext, arial, helvetica, sans-serif" m={5}>
                    EXPLORE LAND ROVER
                </Heading>
                <Grid cards={explore} />
            </Container>
            <NearestRetailer />
            <LiveShowcase />
            <RightMenu />
            <PointsMenu />
        </>
    )
}

jlr.getTemplateName = () => 'jlr'

export default jlr
