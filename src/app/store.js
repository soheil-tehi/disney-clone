import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";
import movieSlice from "../feature/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
  },
  // middleware: getDefaultMiddleware({
  //     serializableCheck: false
  // })
});
