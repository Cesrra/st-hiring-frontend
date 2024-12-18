import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../index';

const API_URL = import.meta.env.VITE_API_URL;

export interface Settings {
  clientId: number;
  deliveryMethods: any[];
  fulfillmentFormat: Record<string, boolean>;
  [key: string]: any;
}

export interface SettingsState {
  settings: Settings | null;
  loading: boolean;
  error: string | null;
}

const initialState: SettingsState = {
  settings: null,
  loading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk<Settings, number, { rejectValue: string }>('settings/fetchSettings', async (clientId: number, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/settings/${clientId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Failed to fetch settings');
  }
});

export const updateSettings = createAsyncThunk<Settings, { clientId: number; settings: Settings }, { rejectValue: string }>(
  'settings/updateSettings',
  async ({ clientId, settings }: { clientId: number; settings: Settings }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/settings/${clientId}`, settings);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to update settings');
    }
  }
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSettings.fulfilled, (state, action: PayloadAction<Settings>) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch settings';
      })
      .addCase(updateSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSettings.fulfilled, (state, action: PayloadAction<Settings>) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(updateSettings.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update settings';
      });
  },
});

export const selectSettings = (state: RootState) => state.settings.settings;
export const selectSettingsLoading = (state: RootState) => state.settings.loading;
export const selectSettingsError = (state: RootState) => state.settings.error;

export default settingsSlice.reducer;
