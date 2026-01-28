import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';
const ITEMS_PER_PAGE = 8;

export const fetchCampers = createAsyncThunk(
  'catalog/fetchCampers',
  async ({ page = 1, filters = {} }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({
        page,
        limit: ITEMS_PER_PAGE,
      });

      // Add location filter
      if (filters.location) {
        params.append('location', filters.location);
      }

      // Add vehicle type filter
      if (filters.vehicleType) {
        params.append('form', filters.vehicleType);
      }

      // Add equipment filters
      const equipmentFilters = { ...filters.equipment };
      if (equipmentFilters.automatic) {
        params.append('transmission', 'automatic');
        delete equipmentFilters.automatic;
      }

      Object.keys(equipmentFilters).forEach(key => {
        if (equipmentFilters[key]) {
          params.append(key, 'true');
        }
      });

      const response = await axios.get(`${BASE_URL}/campers`, { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  'camper/fetchCamper',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/campers/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
