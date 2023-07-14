import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};
const counterSlice = createSlice({
    name: "counter", // a unique identifier for the slice of state.
    initialState,   // initial values for our reducer (state) object
    reducers: {
        incremented(state){
            state.value++; 
        },
        decremented(state){
            if(state.value > 0 ){state.value--}
        },
        reset(state){
            state.value = 0;
        },
        incrementedByValue(state,action){
            state.value += action.payload
        }
    }
})
export const useCounterSelector = state=> state.counter.value
export const {incremented,decremented,reset,incrementedByValue}  = counterSlice.actions;
export default counterSlice.reducer