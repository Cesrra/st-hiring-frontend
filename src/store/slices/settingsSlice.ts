import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import apiClient from '../../utils/apiClient';
import { AxiosError } from 'axios';
import { Settings, SettingsState } from '../../types';

const initialState: SettingsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk<
  Settings,
  number,
  { rejectValue: string }
>('settings/fetchSettings', async (clientId, { rejectWithValue }) => {
  try {
    const response = await apiClient.get<Settings>(`/settings/${clientId}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.response?.data as string || 'Failed to fetch settings');
  }
});

export const updateSettings = createAsyncThunk<
  void,
  { clientId: number; settings: Settings },
  { rejectValue: string }
>('settings/updateSettings', async ({ clientId, settings }, { rejectWithValue }) => {
  try {
    await apiClient.put<Settings>(`/settings/${clientId}`, settings);
    await fetchSettings(clientId);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.response?.data as string || 'Failed to update settings');
  }
});

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
        state.data = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch settings';
      })
      .addCase(updateSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSettings.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateSettings.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update settings';
      });
  },
});

export const selectSettings = (state: RootState) => state.settings.data;
export const selectSettingsLoading = (state: RootState) => state.settings.loading;
export const selectSettingsError = (state: RootState) => state.settings.error;

export default settingsSlice.reducer;
