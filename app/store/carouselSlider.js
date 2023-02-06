import {createSlice} from '@reduxjs/toolkit'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const carouselSlider = createSlice({
    name: 'carouselSlider',
    initialState: {
        slides: [
            {
                type: 'video',
                url: getAssetUrl('static/img/jlr/carousel/video.mp4')
            },
            {
                type: 'image',
                url: getAssetUrl('static/img/jlr/carousel/L663_23-5MY_096_GLHD_SEDONA_RED_DX.webp')
            },
            {
                type: 'image',
                url: getAssetUrl('static/img/jlr/carousel/L461_23MY_045_GLHD_DX.webp')
            }
        ],
        currentSlide: 0
    },
    reducers: {
        nextSlide: (state) => {
            if (state.currentSlide === state.slides.length - 1) {
                state.currentSlide = 0
            } else {
                state.currentSlide += 1
            }
        },
        prevSlide: (state) => {
            if (state.currentSlide === 0) {
                state.currentSlide = state.slides.length - 1
            } else {
                state.currentSlide -= 1
            }
        }
    }
})

export const {nextSlide, prevSlide} = carouselSlider.actions

export default carouselSlider.reducer
