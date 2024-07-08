import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'authSliceReducers',
    initialState: {
        isAuthenticated: false,
        
    },
    reducers:{
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    }
})


export const authSliceReducers = slice.reducer
export const {setIsAuthenticated} = slice.actions