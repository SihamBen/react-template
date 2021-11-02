import {AxiosError} from 'axios';
import {useQuery, UseQueryOptions} from 'react-query';
import {client} from 'api';
import {UserType} from './types';
const getUsers = async () => {
  const {data} = await client('users');
  return data;
};
export const useUsers = (options?: UseQueryOptions<UserType[], AxiosError>) =>
  useQuery<UserType[], AxiosError>('users', () => getUsers(), {
    ...options,
  });
