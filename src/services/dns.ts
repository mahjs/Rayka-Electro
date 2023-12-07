import ClientApi from './clientApi';
import config, { AxiosReturnType } from './config';

const axios = new ClientApi();
const { rootAddress } = config;

type DnsReturnType = {
  results: {
    dns: Dns[];
  };
};

export type Dns = {
  id: number;
  domain: string;
};

export const getAllDns = async (): Promise<AxiosReturnType<DnsReturnType>> =>
  await axios.http.get(rootAddress + '/dns');
