import { configureStore } from "@reduxjs/toolkit";
import peopleApp from '../reducers/peopleApp'

export const store = configureStore({
  reducer: {
    people: peopleApp,
  },
});