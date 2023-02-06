import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./features/useSlice";
const store = configureStore({ reducer });


export default store;