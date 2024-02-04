import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to get all user
export const getUsers = createAsyncThunk("users/getUsers", async (page) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/?page=${page}&results=50`);
  return response.data.results;
});

const initialState = { 
  status: "idle",
  error: null,
  users: [],
  filter: {
    gender: "all",
    nationality: "all",
    name: "",
  },
}

const peopleApp = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
      setGender(state, action) {
        state.filter.gender = action.payload;
      },
      setNationality(state, action) {
        state.filter.nationality = action.payload;
      },
      setName(state, action) {
        state.filter.name = action.payload;
      },
    },
      extraReducers(builder) {
        builder
          .addCase(getUsers.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = [...state.users, ...action.payload];
            state.error = null;
          })
          .addCase(getUsers.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
      },
  });
  
  export const { setNumPage, setName, setNationality, setGender, setSerachResult } = peopleApp.actions;
  
  export default peopleApp.reducer;