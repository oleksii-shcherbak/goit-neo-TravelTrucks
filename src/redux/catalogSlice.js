import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './thunks';

const ITEMS_PER_PAGE = 8;

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  filters: {
    location: '',
    vehicleType: '',
    equipment: {},
  },
  currentPage: 1,
  isLoadMoreAvailable: true,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    applyFilters: (state, action) => {
      if (JSON.stringify(state.filters) !== JSON.stringify(action.payload)) {
        state.currentPage = 1;
        state.data = null;
        state.isLoadMoreAvailable = true;
        state.filters = action.payload;
      }
    },
    loadMore: state => {
      state.currentPage += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        const existingIds = new Set(
          state.data?.items?.map(item => item.id) || []
        );
        const newItems = action.payload.items.filter(
          item => !existingIds.has(item.id)
        );

        if (state.data) {
          state.data.items.push(...newItems);
        } else {
          state.data = action.payload;
        }

        state.isLoadMoreAvailable = newItems.length === ITEMS_PER_PAGE;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { applyFilters, loadMore } = catalogSlice.actions;
export default catalogSlice.reducer;
