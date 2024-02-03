import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to get all user
export const getUsers = createAsyncThunk("users/getUsers", async (page = 1) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/?page=${page}&results=50&seed=abc`);
  return response.data.results;

});

const initialState = { 
  status: "idle",
  error: null,
  isLoading: false,
  users: [],
  filter: {
    gender: "all",
    nationality: "all",
    name: "",
  },
  searchResult: [],
}

export const peopleApp = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
      setSearchResult: (state,action) => {
        state.filterBy = action.payload
        state.searchResult = state.users.filter((person) => (state.filterBy.searchSelectGender === "all" || person.gender === state.filterBy.searchSelectGender) && (state.filterBy.searchSelectNation === "all" || person.nat === state.filterBy.searchSelectNation) && (person.name.first.toLowerCase().includes(state.filterBy.searchSelectName.toLowerCase()) || person.name.last.toLowerCase().includes(state.filterBy.searchSelectName.toLowerCase())))
      },
      setGender(state, action) {
        state.filter.gender = action.payload;
      },
      setNationality(state, action) {
        state.filter.nationality = action.payload;
      },
      setName(state, action) {
        state.filter.name = action.payload;
      },
      extraReducers(builder) {
        builder
          .addCase(getUsers.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = [...state.users,...action.payload];
            state.error = null;
          })
          .addCase(getUsers.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
      },
  }});
  
  export const { setIsLoading, setNumPage, setSearchResult } = peopleApp.actions;
  
  export default peopleApp.reducer;