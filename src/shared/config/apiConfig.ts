import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
})