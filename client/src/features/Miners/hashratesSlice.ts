import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { HashrateState } from "./type";
import * as api from './api'

const initialState: HashrateState = {
  hashrates: [],
  hashrate:null,
  message: '',
}

export const hashratesLoad = createAsyncThunk('hashrates/load', () => api.hashratesLoadFetch())
export const getHashrateId = createAsyncThunk('hashrate/id', (id: string | undefined) => api.hashrateIdFetch(id))

const hashratesSlice = createSlice({
  name: 'hashrates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(hashratesLoad.fulfilled, (state, action) => {state.hashrates = action.payload; state.message = '';})
    .addCase(hashratesLoad.rejected, (state, action) => { state.message = action.error.message})
    .addCase(getHashrateId.fulfilled, (state, action) => {state.hashrate = action.payload, state.message = '';})
    .addCase(getHashrateId.rejected, (state, action) => { state.message = action.error.message})
  }
})

export default hashratesSlice.reducer