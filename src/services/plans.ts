import ClientApi from './clientApi';
import config, { AxiosReturnType } from './config';

const axios = new ClientApi();
const { rootAddress } = config;

type PlansType = {
  results: {
    plans: Plan[];
  };
};

export type Plan = {
  id: number;
  title: string;
  icon: string;
  price: string;
  metas: { id: number; title: string }[];
  times: { id: number; count: string; day: number; price_increase: string }[];
};

export const getAllPlans = async (): Promise<AxiosReturnType<PlansType>> =>
  await axios.http.get(rootAddress + '/plans');

export const getPlanDetails = async (planId: string): Promise<AxiosReturnType<Plan>> =>
  await axios.http.get(rootAddress + '/plan/' + planId);
