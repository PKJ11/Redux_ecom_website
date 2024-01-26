import { configureStore } from '@reduxjs/toolkit'
import sliderReducers from '../features/slices/sliderSlices'
import productReducers from '../features/slices/productSlices'
import cartReducer from "../features/slices/cartSlice"
import authReducers from '../features/slices/authSlice'
export const store = configureStore({
    reducer: {
      'slider':sliderReducers,
      'products':productReducers,
      'cart': cartReducer,
      'user': authReducers,
    },
  })