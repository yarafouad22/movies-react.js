import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getTranding=createAsyncThunk('movies/getTranding',async(mediaType)=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=971b05a0d7a4c64de1f446c0987defbf`);
    return data.results
});
export let getMovieDetails = createAsyncThunk('movies/getMovieDetails', async (id) => {
  let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=971b05a0d7a4c64de1f446c0987defbf`);
  return data;
});

let initialState={trandingMovies:[],loading:false};

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
      trandingMovies: [],
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
              state.trandingMovies = action.payload;
          })
          .addCase(getTranding.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
          });

      
      builder
          .addCase(getMovieDetails.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(getMovieDetails.fulfilled, (state, action) => {
              state.loading = false;
              state.movieDetails = action.payload;
          })
          .addCase(getMovieDetails.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
          });
  },
});
export let movieReduser = moviesSlice.reducer;