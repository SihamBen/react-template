import {AxiosError, AxiosResponse} from 'axios';
import {MutationFunction, useMutation} from 'react-query';
import {client} from './client';

type Variables = {
  phone_number: string;
  verification_code: string;
};

type Response = {
  refresh: string;
  access: string;
};

const mutationFn: MutationFunction<AxiosResponse<Response>, Variables> = data =>
  client.post('auth/otp', data);

export const useLogin = () =>
  useMutation<AxiosResponse<Response>, AxiosError, Variables>(mutationFn);
