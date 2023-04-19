import { IMovieDetails } from "../../@types/MovieDetails.interface"

export interface IMovieDetailsContent { 
  movieDetails?: IMovieDetails | null,
  loading: boolean,
}