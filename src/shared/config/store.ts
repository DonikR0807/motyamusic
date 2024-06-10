import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { musicApi } from './apiConfig';

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(musicApi.middleware),
})

setupListeners(store.dispatch)