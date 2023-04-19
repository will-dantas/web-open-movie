import { AxiosResponse } from 'axios';
import { api } from '../api';

export class MovieDetailsService {
  async execute(id: string): Promise<AxiosResponse> {
    return api.get(`/movie-details/${id}`);
  }
}