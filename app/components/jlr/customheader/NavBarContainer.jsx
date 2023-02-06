import React from 'react'
import {Flex} from '@chakra-ui/react'
import PropTypes from 'prop-types'

const NavBarContainer = ({children, ...props}) => {
    return (
        <Flex
            as="nav"
            align="center"
            wrap="wrap"
            w="100%"
            h="auto"
            p={2}
            border="1px"
            borderColor="gray.100"
            bg={['white', 'white', 'white', 'white']}
            {...props}
        >
            {children}
        </Flex>
    )
}
NavBarContainer.propTypes = {
    children: PropTypes.node
}

export default NavBarContainer
