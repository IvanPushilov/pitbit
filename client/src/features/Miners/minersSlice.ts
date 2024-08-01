import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { MinerState } from './type';

import * as api from './api';

export const initialState: MinerState = {
  miners: [],
  message: '',
};

export const minersLoad = createAsyncThunk('miners/load', () => api.minersLoadFetch());

export const minerAdd = createAsyncThunk('miners/add', (obj: FormData) => api.minerAddFetch(obj));

export const minerDel = createAsyncThunk('miners/del', (id: number) => api.minerDelFetch(id));

const minersSlice = createSlice({
  name: 'miners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(minersLoad.pending, (state) => {
        state.message = 'Загрузка...';
      })
      .addCase(minersLoad.fulfilled, (state, action) => {
        state.miners = action.payload;
        state.message = '';
      })
      .addCase(minersLoad.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(minerAdd.fulfilled, (state, action) => {
        state.miners.push(action.payload);
      })
      .addCase(minerAdd.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(minerDel.fulfilled, (state, action) => {
        state.miners = state.miners.filter((miner) => miner.id !== action.payload.id);
      })
      .addCase(minerDel.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default minersSlice.reducer;
