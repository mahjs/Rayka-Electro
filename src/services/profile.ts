import ClientApi from "./clientApi";
import config from "./config";

const axios = new ClientApi();
const { rootAddress } = config;

export const changePassword = async (
  current_pass: string,
  new_pass: string,
  repet_pass: string
) =>
  await axios.http.post(rootAddress + "/auth/profile/change-password", {
    current_pass,
    new_pass,
    repet_pass,
  });

export const updateProfile = async (
  name: string,
  first_name: string,
  last_name: string
) =>
  await axios.http.post(rootAddress + "/auth/profile/update", {
    name,
    first_name,
    last_name,
  });

export const getProfileInfo = async () =>
  await axios.http.get(rootAddress + "/auth/profile");
