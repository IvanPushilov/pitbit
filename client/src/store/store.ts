import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "../features/Auth/authSlice";
import minersSlice from "../features/Miners/minersSlice";
import brandsSlice from "../features/Miners/brandsSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    miners: minersSlice,
    brands: brandsSlice,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
