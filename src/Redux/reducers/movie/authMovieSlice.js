import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  currentPage: 1,
};

const getMoviePopular = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPopular, setCurrentPage } = getMoviePopular.actions;

export default getMoviePopular.reducer;
