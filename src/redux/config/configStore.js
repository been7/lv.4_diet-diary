import dietsSlice from "../modules/dietsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    diets: dietsSlice,
  },
});

export default store;
