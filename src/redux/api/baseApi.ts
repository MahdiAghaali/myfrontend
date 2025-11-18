import {
  createApi,
  type FetchArgs,
  fetchBaseQuery,
  type FetchBaseQueryError,
  type BaseQueryFn
} from "@reduxjs/toolkit/query/react";
import { TagName, tagNames as tagTypes } from "../lib/tags";

export const baseURL = import.meta.env.VITE_API_URL || '/api';


const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    switch (result.error.status) {
      case 401:
        console.info("Unauthenticated. Destroying authorization context.");
        api.dispatch(baseApi.util.invalidateTags([TagName.Auth]));
        break;
      case 403:
        console.info("Unauthorized request. Destroying authorization context.");
        api.dispatch(baseApi.util.invalidateTags([TagName.Auth]));
        break;
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "rtkQuery",
  tagTypes,
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
});

export default baseApi;
