import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state,action) => {
            state.items = [...state.items,action.payload]
        },
        removeFromBasket: (state,action) => {
            const index = state.items.findIndex(e => e.id === action.payload)
            const newBasket = [...state.items]

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                Alert.alert("You can not remove this from your basket.")
            }

            state.items = newBasket;
        }
    },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items
export const selectBasketItemsWithId = (state,id) => state.basket.items.filter((item) => item.id === id)
export const selectedBasketTotal = (state) => state.basket.items.reduce((total,item) => total += item.price, 0)

export default basketSlice.reducer;