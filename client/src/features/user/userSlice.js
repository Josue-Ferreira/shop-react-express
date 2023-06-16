import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        profile: null
    },
    reducers: {
        logIn: (state, action) => {
            state.profile = action.payload;
        },
        logOut: (state) => {
            state.profile = null;
        }
    }
});

export const {logIn, logOut} = userSlice.actions;

export default userSlice.reducer;