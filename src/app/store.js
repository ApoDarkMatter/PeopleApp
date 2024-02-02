import { configureStore } from "@reduxjs/toolkit";
import peopleApp from '../reducers/peopleApp'
import {peopleApi} from '../features/apiSlice'

export const store = configureStore({
  reducer: {
    people: peopleApp,
    [peopleApi.reducerPath]: peopleApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(peopleApi.middleware)
});