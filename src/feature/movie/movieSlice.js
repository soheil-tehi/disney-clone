import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recomended: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recomended = action.payload.recomended;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
      
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
