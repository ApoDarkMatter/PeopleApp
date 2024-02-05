import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to get all user
export const getUsers = createAsyncThunk("users/getUsers", async (page) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/?page=${page}&results=50`);
  return response.data.results;
});

//set initial state
const initialState = { 
  status: "idle",
  error: null,
  users: [],
  filteredResult: [],
  filter: {
    gender: "all",
    nationality: "all",
    name: "",
  },
}

//set reducers and extra reducers
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
      setFilteredResult(state, action) {
        state.filteredResult = state.users.filter((user) =>
                                                    (state.filter.gender === "all" || user.gender === state.filter.gender) &&
                                                    (state.filter.nationality === "all" || user.nat === state.filter.nationality) &&
                                                    (user.name.first.toLowerCase().includes(state.filter.name.toLowerCase()) ||
                                                      user.name.last.toLowerCase().includes(state.filter.name.toLowerCase())))
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
  
  export const { setName, setNationality, setGender, setFilteredResult } = peopleApp.actions;
  
  export default peopleApp.reducer;