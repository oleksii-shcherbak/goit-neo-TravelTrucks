import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      state.favoriteIds = state.favoriteIds.includes(action.payload)
          ? state.favoriteIds.filter(id => id !== action.payload)
          : [...state.favoriteIds, action.payload];
    },
  },
});

export const selectFavorites = state => state.favorites;

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;