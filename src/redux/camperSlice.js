import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './thunks';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default camperSlice.reducer;
