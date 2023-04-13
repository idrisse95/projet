import { configureStore } from "@reduxjs/toolkit";
import sideBarFav from './reduce/reduxe'

export const store = configureStore({
  reducer: {
    sideBarFav: sideBarFav,
  },
});

