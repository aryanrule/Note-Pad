import { configureStore } from "@reduxjs/toolkit";
import FeaturesReducer from '../Redux/slices/FeaturesSlice';


export const store = configureStore({
    reducer:
    { 
       Feature : FeaturesReducer,       
    } , 
});
