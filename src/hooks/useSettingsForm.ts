import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { AppDispatch, RootState } from '../store';
import { fetchSettings, updateSettings } from '../store/slices/settingsSlice';
import { Settings } from '../types';

export const useSettingsForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings.data);
  const loading = useSelector((state: RootState) => state.settings.loading);
  const error = useSelector((state: RootState) => state.settings.error);

  const fetchSettingsData = useCallback((clientId: number) => {
    dispatch(fetchSettings(clientId));
  }, [dispatch]);

  const saveSettings = useCallback((settings: Settings) => {
    const payload = { ...settings };
    delete payload._id;
    dispatch(updateSettings({ clientId: settings.clientId, settings: payload }));
  }, [dispatch]);

  return {
    settings,
    loading,
    error,
    fetchSettingsData,
    saveSettings,
  };
};
