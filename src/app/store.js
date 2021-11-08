import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    // notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})