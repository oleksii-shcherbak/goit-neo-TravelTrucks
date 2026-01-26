import { createSlice } from '@reduxjs/toolkit';

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
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setError } = catalogSlice.actions;
export default catalogSlice.reducer;