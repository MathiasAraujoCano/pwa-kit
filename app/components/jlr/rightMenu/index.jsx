import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import {ChatIcon} from '@chakra-ui/icons'

const RightMenu = () => {
    return (
        <Box
            mr={0}
            p={2}
            bg="rgb(0, 90, 43)"
            color="white"
            borderRadius={30}
            w={170}
            pos="fixed"
            bottom="40%"
            right="-60px"
            display="flex"
            justifyContent="space-evenly"
            z-index={10}
            style={{transform: 'rotate(-90deg)'}}
        >
            <Text>
                <Text>
                    <ChatIcon />
                </Text>
                Message Us
            </Text>
        </Box>
    )
}

export default RightMenu
