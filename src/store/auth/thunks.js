import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'Api';

export const loginThunk = createAsyncThunk(
  '/users/login',
  async (body, { rejectWithValue }) => {
    try {
      return await login(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
