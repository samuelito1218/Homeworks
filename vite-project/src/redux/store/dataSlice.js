import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    loading : false,
    error : null
};

const dataSlice = createSlice({
    name : 'data',
    initialState,
    reducers:{
        setLoading(state,action){
            state.loading = action.payload
        },
        setError(state,action){
            state.error = action.payload
        },
        setItems(state,action){
            state.items = action.payload;
            state.error=null;
        },
        updateLocalItem(state,action){
            const idx = state.items.findIndex(item => item.id === action.payload.id);
            if (idx !== -1) state.items[idx] = action.payload;
        },
        removeLocalItem(state, action){
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const{setLoading,setError,setItems,updateLocalItem,removeLocalItem}=dataSlice.actions;
export default dataSlice.reducer;