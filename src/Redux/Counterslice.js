import { createSlice } from "@reduxjs/toolkit";

let initialState={counter:0,userName:'ahmed'}
let counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increase:(state)=>{state.counter +=1},
        decrease:(state)=>{state.counter -=1}

    }
});
export let counterReducer= counterSlice.reducer;
export let {increase,decrease}=counterSlice.actions