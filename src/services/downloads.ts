import ClientApi from './clientApi';
import config, { AxiosReturnType } from './config';

const axios = new ClientApi();
const { rootAddress } = config;

type DownloadsReturnType = {
  results: {
    downloads: Download[];
  };
};

export type Download = {
  id: number;
  title: string;
  link: string;
  icon: string;
};

export const getAllDownloads = async (): Promise<AxiosReturnType<DownloadsReturnType>> =>
  axios.http.get(rootAddress + '/downloads');
