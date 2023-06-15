import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        content: null
    },
    reducers: {
        add: (state, action) => {
            // console.log('add',action.payload)
            if(state.content == null)
                state.content = [];
            state.content.push(action.payload);
        },
        remove: (state, action) => {
            const index = state.content.findIndex(cartProduct => cartProduct.id == action.payload.id);
            if(state.content != null && index != -1)
                state.content.splice(index,1);
        },
        removeAll: (state) => {

        }
    }
});

export const {add, remove, removeAll} = cartSlice.actions;

export default cartSlice.reducer;