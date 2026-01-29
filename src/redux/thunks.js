import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchItems',
  async ({ page, limit, location, type, ...equipmentFilters }, thunkAPI) => {
    try {
      // Transform "automatic" filter to "transmission" parameter
      const params = {
        page,
        limit,
        ...(location && { search: location }),
        ...(type && { form: type }),
      };

      // Handle automatic separately - it's a transmission type, not a boolean feature
      if (equipmentFilters.automatic) {
        params.transmission = 'automatic';
        delete equipmentFilters.automatic;
      }

      // Add remaining equipment filters
      Object.assign(params, equipmentFilters);

      const response = await axios.get('/campers', { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  'camper/fetch',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
