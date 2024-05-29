import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const get = async <T>(config: AxiosRequestConfig): Promise<T> => {
  config.method = 'GET';
  const response: AxiosResponse<T> = await axios(config); 
  return response.data;
}

export const post = async <T>(config: AxiosRequestConfig): Promise<T> => {
  config.method = 'POST';
  config.headers = { "Content-Type" : "application/json" };
  const response: AxiosResponse<T> = await axios(config);
  return response.data;
}