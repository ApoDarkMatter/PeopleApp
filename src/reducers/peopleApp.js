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
        state.allPeople = [...state.allPeople,...action.payload]
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
        //state.searchResult = state.allPeople.filter((person) => person.name.first.toLowerCase().includes(action.payload.toLowerCase()))
        //state.searchResult = action.payload
        state.searchResult = state.allPeople.filter((person) => person.name.first.toLowerCase().includes(action.payload.toLowerCase()))

        /* const filteredUsers = users.filter(
          (user) =>
            (action.payload.gender === "all" || person.gender === action.payload.gender.gender) &&
            (action.payload.nationality === "all" || person.nat === action.payload.nationality) &&
            (user.name.first.toLowerCase().includes(filter.name.toLowerCase()) ||
              user.name.last.toLowerCase().includes(filter.name.toLowerCase()))
        ); */
      }
  }});
  
  export const { setDarkMode, setIsLoading, setAllPeople, setNumPage, setSearchField, setSearchParam, setSearchResult } = peopleApp.actions;
  
  export default peopleApp.reducer;