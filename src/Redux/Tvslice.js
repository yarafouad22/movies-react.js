import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getTranding=createAsyncThunk('Tv/getTranding',async(mediaType)=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=971b05a0d7a4c64de1f446c0987defbf`);
    return data.results
});

let initialState={trandingTv:[],loading:false};

const TvSlice = createSlice({
    name: 'Tv',
    initialState: {
      trandingTv: [],
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(getTranding.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getTranding.fulfilled, (state, action) => {
            state.loading = false;
            state.trandingTv = action.payload;
          })
          .addCase(getTranding.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
    });
    
    export let tvReducer = TvSlice.reducer;
