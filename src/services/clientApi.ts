import axios, { AxiosInstance } from 'axios';
import config from './config';
import storage from './storage';

export default class ClientApi {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: config.rootAddress,
      timeout: config.timeout,
    });

    this.http.interceptors.request.use(async (request) => {
      if (request && request.headers) {
        const token = storage.get(config.tokenName);
        token && (request.headers.Authorization = `Bearer ${storage.get(config.tokenName)}`);
      }

      return request;
    });

    this.http.interceptors.response.use((response) => {
      if (response.data.datas) {
        const { token } = response.data.datas;
        const { otp_token } = response.data.datas.results;

        token && storage.set(config.tokenName, token);
        otp_token && storage.set(config.otpTokenName, otp_token);
      }

      return response.data;
    });
  }
}
