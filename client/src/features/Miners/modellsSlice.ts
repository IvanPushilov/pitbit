import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ModellState } from "./type";
import * as api from './api'

const initialState: ModellState = {
  modells: [],
  modell:null,
  message: '',
}

export const modellsLoad = createAsyncThunk('modells/load', () => api.modellsLoadFetch())
export const getModellId = createAsyncThunk('modell/id', (id: string | undefined) => api.modellIdFetch(id))

const modellsSlice = createSlice({
  name: 'modells',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(modellsLoad.fulfilled, (state, action) => {state.modells = action.payload; state.message = '';})
    .addCase(modellsLoad.rejected, (state, action) => { state.message = action.error.message})
    .addCase(getModellId.fulfilled, (state, action) => {state.modell = action.payload, state.message = '';})
    .addCase(getModellId.rejected, (state, action) => { state.message = action.error.message})
  }
})

export default modellsSlice.reducer