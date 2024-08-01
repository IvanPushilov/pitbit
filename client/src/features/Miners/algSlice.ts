import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AlgorithmState } from "./type";
import * as api from './api'

const initialState: AlgorithmState = {
  algorithms: [],
  algorithm:null,
  message: '',
}

export const algorithmsLoad = createAsyncThunk('algorithms/load', () => api.algorithmsLoadFetch())
export const getAlgorithmId = createAsyncThunk('algorithm/id', (id: string | undefined) => api.algorithmIdFetch(id))

const algorithmsSlice = createSlice({
  name: 'algorithms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(algorithmsLoad.fulfilled, (state, action) => {state.algorithms = action.payload; state.message = '';})
    .addCase(algorithmsLoad.rejected, (state, action) => { state.message = action.error.message})
    .addCase(getAlgorithmId.fulfilled, (state, action) => {state.algorithm = action.payload, state.message = '';})
    .addCase(getAlgorithmId.rejected, (state, action) => { state.message = action.error.message})
  }
})

export default algorithmsSlice.reducer