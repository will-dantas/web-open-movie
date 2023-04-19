import { api } from '../api';
import { IDatailsSearch } from '../../@types/DatailsSearchService.interface';
import { AxiosResponse } from 'axios';

export class DatailsSearchService {
  async execute(searchTerm: string): Promise<AxiosResponse> {
    return api.get(`/datails-search/${searchTerm}`);
  }
}
