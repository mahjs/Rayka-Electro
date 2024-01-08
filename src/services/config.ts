const config = {
  rootAddress: 'http://95.38.58.65/api/v1',
  timeout: 25000,
  tokenName: 'eyesp_dashboard_token',
  otpTokenName: 'OTP_Token',
  cid: 'user-id',
  userName: '403_user_name',
};

export type AxiosReturnType<T> = {
  statusCode: number;
  message: string;
  datas: T;
};

export default config;
