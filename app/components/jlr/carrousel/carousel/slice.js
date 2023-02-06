import {createSlice} from '@reduxjs/toolkit'

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        slideIndex: 0
    },
    reducers: {
        nextSlide: (state) => {
            state.slideIndex += 1
        },
        prevSlide: (state) => {
            state.slideIndex -= 1
        }
    }
})

export const {nextSlide, prevSlide} = carouselSlice.actions
export default carouselSlice.reducer
