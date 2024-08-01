import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { SubBrandState } from "./type";
import * as api from './api'

const initialState: SubBrandState = {
  subbrands: [],
  subbrand:null,
  message: '',
}

export const subbrandsLoad = createAsyncThunk('subbrands/load', () => api.subbrandsLoadFetch())
export const getSubbrandId = createAsyncThunk('subbrand/id', (id: string | undefined) => api.subbrandIdFetch(id))

const subbrandsSlice = createSlice({
  name: 'subbrands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(subbrandsLoad.fulfilled, (state, action) => {state.subbrands = action.payload; state.message = '';})
    .addCase(subbrandsLoad.rejected, (state, action) => { state.message = action.error.message})
    .addCase(getSubbrandId.fulfilled, (state, action) => {state.subbrand = action.payload, state.message = '';})
    .addCase(getSubbrandId.rejected, (state, action) => { state.message = action.error.message})
  }
})

export default subbrandsSlice.reducer