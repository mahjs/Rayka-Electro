import ClientApi from "./clientApi";
import config, { AxiosReturnType } from "./config";

const axios = new ClientApi();
const { rootAddress } = config;

// Login
type AuthLoginReturnType = {
  token: string;
  results: {
    user: {
      name: string;
      emaiL: string;
      first_name: string | null;
      last_name: string | null;
      mobile: string | null;
      email_verified_at: string | null;
      active_account: number;
    };
  };
};

export const login = async (
  name: string,
  password: string
): Promise<AxiosReturnType<AuthLoginReturnType>> =>
  await axios.http.post(rootAddress + "/auth/login", {
    name,
    password,
  });

// Register
type AuthRegisterReturnType = {
  token: string;
  results: {
    user: {
      email: string;
      name: string;
    };

    otp_token: string;
  };
};

export const register = async (
  email: string,
  name: string,
  password: string,
  re_password: string
): Promise<AxiosReturnType<AuthRegisterReturnType>> =>
  axios.http.post(rootAddress + "/auth/register", {
    email,
    name,
    password,
    re_password,
  });

// Activate Email
type AuthActiveEmailReturnType = {
  token: string;
  results: {
    user: {
      name: string;
      emaiL: string;
      first_name: string | null;
      last_name: string | null;
      mobile: string | null;
      email_verified_at: string | null;
      active_account: number;
    };

    otp_token: string;
  };
};

export const activateEmail = async (
  otpToken: string,
  otpCode: number
): Promise<AxiosReturnType<AuthActiveEmailReturnType>> =>
  axios.http.post(rootAddress + "/auth/active-email/" + otpToken, {
    otp: otpCode,
  });

// Reset Password
export const resetPassword = async (resetToken: string, password: string) =>
  axios.http.post(rootAddress + "/auth/reset-password", {
    token: resetToken,
    password,
  });

// Forgot Password
export const forgotPassword = async (email: string) =>
  await axios.http.post(rootAddress + "/auth/forgot-password", {
    email,
  });
