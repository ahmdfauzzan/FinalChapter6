// searchActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovie } from "../../services/search-movie";
import { setSearchError, setSearchLoading, setSearchResults } from "../reducers/Search/searchSlice";

export const fetchSearchResults = createAsyncThunk("search/fetchSearchResults", async (query, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setSearchLoading());
    const results = await searchMovie(query);
    dispatch(setSearchResults(results));
  } catch (error) {
    dispatch(setSearchError(error.message));
    return rejectWithValue(error.response?.data);
  }
});
