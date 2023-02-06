import React from 'react'
import {Box, Image} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const Logo = (props) => {
    return (
        <Box as="a" href="/" {...props}>
            <Image
                w="65px"
                h="auto"
                src={getAssetUrl('static/img/jlr/header/logo_jlr.webp')}
                alt=""
            />
        </Box>
    )
}

export default Logo
