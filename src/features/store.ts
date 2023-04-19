import { configureStore } from "@reduxjs/toolkit";
import movieDetailsSliceReducer from "./movie-datails/movie-details-slice";

export default configureStore({
  reducer: {
    movieDetails: movieDetailsSliceReducer
  }
});