import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './thunks';

const initialState = {
  data: null,
  isLoading: false,
  isLoadingMore: false,
  isLoadMoreAvailable: true,
  error: null,
  currentPage: 1,
  filters: { location: '', equipment: {}, type: '' },
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    applyFilters: (state, action) => {
      if (JSON.stringify(state.filters) !== JSON.stringify(action.payload)) {
        state.currentPage = 1;
        state.data = null;
        state.isLoadMoreAvailable = true;
        state.filters = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
        .addCase(fetchCatalog.pending, state => {
          if (!state.data?.items) {
            state.isLoading = true;
          } else {
            state.isLoadingMore = true;
          }
          state.error = null;
        })
        .addCase(fetchCatalog.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLoadingMore = false;
          state.error = null;
          if (state.data?.items) {
            // Prevent duplicates by filtering out items that already exist
            const existingIds = new Set(state.data.items.map(item => item.id));
            const newItems = action.payload.items.filter(item => !existingIds.has(item.id));

            state.data = {
              total: action.payload.total,
              items: [...state.data.items, ...newItems],
            };
          } else {
            state.data = action.payload;
          }
          if (state.data.items.length >= state.data.total) {
            state.isLoadMoreAvailable = false;
          }
        })
        .addCase(fetchCatalog.rejected, (state, action) => {
          state.isLoading = false;
          state.isLoadingMore = false;
          state.error = action.payload;
        });
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice.reducer;