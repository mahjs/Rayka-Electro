import ClientApi from './clientApi';
import config, { AxiosReturnType } from './config';

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
  otp_token: string;
};

/**
 * Performs user login.
 * Sends a POST request to the server with the username and password.
 * On success, returns a token and user details.
 * 
 * @param {string} name - Username of the user.
 * @param {string} password - Password of the user.
 * @returns {Promise<AxiosReturnType<AuthLoginReturnType>>} - Promise resolving to the login response data.
 */
export const login = async (name: string, password: string): Promise<AxiosReturnType<AuthLoginReturnType>> =>
  await axios.http.post(rootAddress + '/auth/login', {
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

/**
 * Registers a new user.
 * Sends a POST request to the server with email, username, password, and password confirmation.
 * On successful registration, returns a token and user details.
 * 
 * @param {string} email - Email of the new user.
 * @param {string} name - Username of the new user.
 * @param {string} password - Password of the new user.
 * @param {string} re_password - Confirmation of the password.
 * @returns {Promise<AxiosReturnType<AuthRegisterReturnType>>} - Promise resolving to the registration response data.
 */
export const register = async (
  email: string,
  name: string,
  password: string,
  re_password: string,
): Promise<AxiosReturnType<AuthRegisterReturnType>> =>
  axios.http.post(rootAddress + '/auth/register', {
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

/**
 * Activates a user's email.
 * Sends a POST request to the server with the OTP token and code received by the user.
 * On success, returns updated user details.
 * 
 * @param {string} otpToken - OTP token received during registration.
 * @param {string} otpCode - OTP code received by the user.
 * @returns {Promise<AxiosReturnType<AuthActiveEmailReturnType>>} - Promise resolving to the email activation response data.
 */
export const activateEmail = async (
  otpToken: string,
  otpCode: string,
): Promise<AxiosReturnType<AuthActiveEmailReturnType>> =>
  axios.http.post(rootAddress + '/auth/active-email/' + otpToken, {
    otp: otpCode,
  });

/**
* Resets a user's password.
* Sends a POST request to the server with the reset token and the new password.
* 
* @param {string} resetToken - Token used to identify the password reset request.
* @param {string} password - New password set by the user.
* @returns {Promise<any>} - Promise resolving to the response from the password reset request.
*/
export const resetPassword = async (resetToken: string, password: string) =>
  axios.http.post(rootAddress + '/auth/reset-password', {
    token: resetToken,
    password,
  });

/**
 * Initiates a password recovery process for a user.
 * Sends a POST request to the server with the user's email.
 * 
 * @param {string} email - Email of the user who has forgotten their password.
 * @returns {Promise<any>} - Promise resolving to the response from the password recovery request.
 */
export const forgotPassword = async (email: string) =>
  await axios.http.post(rootAddress + '/auth/forgot-password', {
    email,
  });
