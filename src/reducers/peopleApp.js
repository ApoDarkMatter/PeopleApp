import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    darkMode: true,
    isLoading: false,
    allPeople: [],
    numPage: 1,
    searchParam: "name",
    searchSearchField: "",
    searchResult: [],
}

export const peopleApp = createSlice({
    name: "people",
    initialState: initialState,
    reducers: {
      setDarkMode: (state,action) => {
        state.darkMode = action.payload
      },
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
      setAllPeople: (state,action) => {
        state.allPeople = action.payload
      },
      setNumPage: (state,action) => {
        state.numPage = action.payload
      },
      setSearchParam: (state,action) => {
        state.searchParam = action.payload
      },
      setSearchField: (state,action) => {
        state.searchField = action.payload
      },
      setSearchResult: (state,action) => {
        state.searchResult = state.allPeople.filter((person) => person.name.first.toLowerCase().includes(action.payload.toLowerCase()))
      }
  }});
  
  export const { setDarkMode, setIsLoading, setAllPeople, setNumPage, setSearchField, setSearchParam, setSearchResult } = peopleApp.actions;
  
  export default peopleApp.reducer;