

import { createSlice } from "@reduxjs/toolkit";



export const UtilitySlice = createSlice({
    name : 'Utils' , 
    initialState , 
    reducers :{

        view:(state , action)=> {

        },
        update:(state , action)=> {

        },
        deleteUtil:(state , action) => {

        },
        
    }
});

export const {view , update , deleteUtil} = UtilitySlice.actions;
export default UtilitySlice.reducer ;