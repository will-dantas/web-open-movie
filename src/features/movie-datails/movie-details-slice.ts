import { createSlice } from "@reduxjs/toolkit";
import { IMovieDetails } from "../../@types/MovieDetails.interface";

const initialState: IMovieDetails = {
  title: '',
  description: '',
  actors: '',
  poster: '',
  imdbRating: '',
  year: '',
};

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    setMovieDetails: (state, { payload }) => {
      return { 
        ...state, 
        initialState: payload
      }
    },
  },
});

export const { setMovieDetails } = movieDetailsSlice.actions;

export const selectMoviesDetails = (state: any) => state;

export default movieDetailsSlice.reducer;