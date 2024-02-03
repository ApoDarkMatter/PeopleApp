import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isLoading: false,
    allPeople: [],
    numPage: 1,
    filterBy: {},
    searchField:"",
    searchResult: [],
}

export const peopleApp = createSlice({
    name: "people",
    initialState: initialState,
    reducers: {
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
      setAllPeople: (state,action) => {
        state.allPeople = [...state.allPeople,...action.payload]
      },
      setNumPage: (state,action) => {
        state.numPage = action.payload
      },
      setFilterBy: (state,action) => {
        state.filterBy = action.payload
      },
      setSearchField: (state,action) => {
        state.searchField = action.payload
      },
      setSearchResult: (state,action) => {
        state.filterBy = action.payload
        state.searchResult = state.allPeople.filter((person) => (state.filterBy.searchSelectGender === "all" || person.gender === state.filterBy.searchSelectGender) && (state.filterBy.searchSelectNation === "all" || person.nat === state.filterBy.searchSelectNation) && (person.name.first.toLowerCase().includes(state.filterBy.searchSelectName.toLowerCase()) || person.name.last.toLowerCase().includes(state.filterBy.searchSelectName.toLowerCase())))
      }
  }});
  
  export const { setDarkMode, setIsLoading, setAllPeople, setNumPage, setSearchField, setSearchParam, setSearchResult, setFilterBy } = peopleApp.actions;
  
  export default peopleApp.reducer;