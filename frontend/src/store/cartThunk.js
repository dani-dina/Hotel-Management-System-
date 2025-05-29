import { createAsyncThunk } from '@reduxjs/toolkit';
import { HTTP_STATUS } from '../constants/httpStatus.js';

export const checkout = createAsyncThunk(
  'cart/checkout',
  async (items, { rejectWithValue }) => {
    try {
   
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: HTTP_STATUS.OK.code });
        }, 1500);
      });
      
      return response;
    } catch (err) {
      return rejectWithValue('Checkout failed. Please try again.');
    }
  }
);