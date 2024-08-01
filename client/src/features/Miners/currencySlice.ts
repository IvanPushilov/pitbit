import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CurrencyState } from "./type";
import * as api from './api'

const initialState: CurrencyState = {
  currencies: [],
  currency:null,
  message: '',
}

export const currenciesLoad = createAsyncThunk('currencies/load', () => api.currenciesLoadFetch())
export const getCurrencyId = createAsyncThunk('currency/id', (id: string | undefined) => api.currencyIdFetch(id))

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(currenciesLoad.fulfilled, (state, action) => {state.currencies = action.payload; state.message = '';})
    .addCase(currenciesLoad.rejected, (state, action) => { state.message = action.error.message})
    .addCase(getCurrencyId.fulfilled, (state, action) => {state.currency = action.payload, state.message = '';})
    .addCase(getCurrencyId.rejected, (state, action) => { state.message = action.error.message})
  }
})

export default currenciesSlice.reducer