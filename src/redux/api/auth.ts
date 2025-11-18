// import { AuthResponseT, LoginRequestT, SignupRequestT, UserT } from 'src/types';
import baseApi from './baseApi';
import { TagName } from '../lib/tags';
import type { AuthResponseT, LoginRequestT, SignupRequestT, UserT } from '../../types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponseT, LoginRequestT>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
        provideTags: [{ type: TagName.Auth }],
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('token', data.accessToken);
        } catch (err) {
          console.error('Login failed', err);
        }
      },
    }),
    signup: build.mutation<UserT, SignupRequestT>({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => `auth/logout`,
      invalidatesTags: [{ type: TagName.Auth }],
    }),
  }),
  overrideExisting: false,
});

export const { 
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation
} = authApi;
