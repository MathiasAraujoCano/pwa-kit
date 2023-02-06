import React, { useState } from 'react';
import { getAssetUrl } from 'pwa-kit-react-sdk/ssr/universal/utils'
import { Box, Text, Container, Button, AspectRatio, Image } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { FaPlayCircle } from 'react-icons/fa';

const CarouselSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = [
        { id: 1, type: 'video', title: 'THE NEW RANGE ROVER VELAR', text: 'SOPHISTICATED ELEGANCE', url: getAssetUrl('static/img/jlr/carousel/video2.mp4') },
        { id: 2, type: 'video', title: 'THE NEW RANGE ROVER SPORT', text: 'VISCERAL, DRAMATIC, UNCOMPROMISING', url: getAssetUrl('static/img/jlr/carousel/video.mp4') },
        { id: 3, type: 'picture', title: 'THE NEW RANGE ROVER', text: 'PEERLES REFINEMENT AND LUXURY', url: getAssetUrl('static/img/jlr/carousel/L663_23-5MY_096_GLHD_SEDONA_RED_DX.webp') },
        { id: 4, type: ' picture', title: 'LAND ROVER DEFENDER', text: 'PEERLES REFINEMENT AND LUXURY', url: getAssetUrl('static/img/jlr/carousel/L461_23MY_045_GLHD_DX.webp') },
    ];

    const prev = () => {
        if (currentSlide > 1) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const next = () => {
        if (currentSlide < slides.length) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    console.log(currentSlide)
    return (

        <Box style={{ width: '100%', maxWidth: 'none' }}>
            <Container style={{ display: 'flex', width: '100%' }}>
                {slides.map(slide => {
                    if (slide.id === currentSlide) {
                        return (
                            <Container>
                                {slide.type === 'video' ? (
                                    <Box w="100%" h="450px">
                                        <video style={{ objectFit: 'cover', overflow: 'hidden', width: '100%', height: '100%', zIndex: '-10' }} src={slide.url} autoPlay loop>
                                            <source src={slide.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Box>
                                ) : (
                                    <Image style={{ backgroundSize: 'cover', overflow: 'hidden', width: '100%', height: '100%', zIndex: '-10' }} src={slide.url} />
                                )}
                            </Container>
                        );
                    }
                    return null;
                })}
            </Container>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 10 }}>
                    <IconButton
                        aria-label="left-arrow"
                        variant="ghost"
                        top={60}
                        paddingLeft={5}
                        left="5%"
                        position="absolute"
                        onClick={prev}>
                        <ChevronLeftIcon w={10} h={10} color="white" />
                    </IconButton>
                    <IconButton
                        aria-label="right-arrow"
                        variant="ghost"
                        top={60}
                        paddingRight={5}
                        right="5%"
                        position="absolute"
                        onClick={next}>
                        <ChevronRightIcon w={10} h={10} color="white" />
                    </IconButton>
                </div>
            </Container>
            <Container ml="5%" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'left', zIndex: '2', bottom: '70px' }}>
                <span>
                    <FaPlayCircle style={{ width: '30px', height: '30px', color: 'white' }} />
                </span>
                {slides.map((slide, index) => (
                    <>
                        <span
                            key={index}
                            style={{
                                width: 10,
                                height: 10,
                                border: '2px solid white',
                                borderRadius: 50,
                                margin: '0 5px',
                                backgroundColor: slide.id === currentSlide ? 'white' : 'none'
                            }}
                        ></span>
                    </>
                ))}
            </Container>
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
                <Container>
                    <Text fontSize="xl">{slides[currentSlide - 1].title}</Text>
                    <Text fontSize="sm">{slides[currentSlide - 1].text}</Text>
                </Container>

                <Box
                    as="button"
                    height={50}
                    width={200}
                    marginTop={10}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    border="1px"
                    px="8px"
                    alignItems="center"
                    borderRadius="0PX"
                    fontSize="12px"
                    fontWeight="thin"
                    bg="black"
                    borderColor="black"
                    color="white"
                    _hover={{ bg: 'white', color: 'black' }}
                    _active={{
                        bg: 'white',
                        transform: 'scale(0.98)',
                        borderColor: 'black'
                    }}
                    _focus={{
                        boxShadow:
                            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
                    }}
                >
                    {<ArrowForwardIcon boxSize={4} />}EXPLORE THIS VEHICLE
                </Box>
            </Container>
        </Box>
    );
};

export default CarouselSlider;


