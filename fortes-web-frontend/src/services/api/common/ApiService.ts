import axios, { AxiosResponse } from 'axios';
import { ApiResponse, PagedResult } from '~/@types/services/common';
import { BASE_URL } from '~/commons/config';
import ModelBase from './ModelBase';

class ApiService<T extends ModelBase> {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = BASE_URL + baseUrl;
  }

  async create(entity: T): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios.post<ApiResponse<T>>(this.baseUrl, entity);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async getAllPaginated<T>(pageNumber: number, pageSize: number): Promise<ApiResponse<PagedResult<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<PagedResult<T>>> = await axios.get<ApiResponse<PagedResult<T>>>(
        `${this.baseUrl}/paged?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async getAll<T>(): Promise<ApiResponse<T[]>> {
    try {
      const response: AxiosResponse<ApiResponse<T[]>> = await axios.get<ApiResponse<T[]>>(
        `${this.baseUrl}/fetchAll`,
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async getById<T extends ModelBase>(id: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios.get<ApiResponse<T>>(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async update(entity: T): Promise<ApiResponse<void>> {
    try {
      debugger;
      await axios.put(`${this.baseUrl}`, entity);
      return {
        data: null,
        isSuccess: true,
      };
    } catch (error: any) {
      throw error;
    }
  }

  async delete(id: string): Promise<ApiResponse<void>> {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
      return {
        data: null,
        isSuccess: true,
      };
    } catch (error: any) {
      throw error;
    }
  }
}

export default ApiService;
