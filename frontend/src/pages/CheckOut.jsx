import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      // In a real app, you would call your API endpoint
      // const response = await axios.post('/api/orders', orderData);
      
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              ...orderData,
              orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
              status: 'processing',
              createdAt: new Date().toISOString()
            }
          });
        }, 1500);
      });
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to create order');
    }
  }
);