import React from 'react'
import {Box, IconButton, Menu, MenuButton} from '@chakra-ui/react'

const PointsMenu = () => {
    return (
        <Box right={10} bottom={['10%', '10%', '70%']} pos="fixed">
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    variant="outline"
                    borderRadius={50}
                    borderColor="green"
                    width={30}
                    bg="rgb(0, 90, 43)"
                    color="white"
                    _hover={{background: 'black', borderColor: 'black'}}
                    boxShadow="dark-lg"
                >
                    ...
                </MenuButton>
            </Menu>
        </Box>
    )
}

export default PointsMenu
