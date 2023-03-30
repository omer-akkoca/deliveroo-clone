import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurant: {
        id: null,
        img: null,
        title: null,
        rating: null,
        genre: null,
        adress: null,
        short_description: null,
        dishes: null
    }
}

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setGlobalRestaurant: (stata,action) => {
            stata.restaurant = action.payload
        }
    }
})

export const { setGlobalRestaurant } = restaurantSlice.actions

export const selectedRestaurant = (stata) => stata.restaurant.restaurant 

export default restaurantSlice.reducer;