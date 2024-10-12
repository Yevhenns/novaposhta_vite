import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_API_KEY;

type typeDepartments = {
  map: any;
  length: number;
  Description: string[];
};

export const getDepartments = createAsyncThunk<
  typeDepartments,
  string,
  { rejectValue: string }
>('departments/getDepartments', async (query, { rejectWithValue }) => {
  try {
    const responce = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: query,
        Language: 'UA',
      },
    });
    return responce.data.data.filter(
      (item: { TypeOfWarehouse: string }) =>
        String(item.TypeOfWarehouse) ===
          '9a68df70-0267-42a8-bb5c-37f427e36ee4' ||
        String(item.TypeOfWarehouse) === '841339c7-591a-42e2-8233-7a0a00f0ed6f'
    );
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const getPostboxes = createAsyncThunk<
  typeDepartments,
  string,
  { rejectValue: string }
>('departments/getPostboxes', async (query, { rejectWithValue }) => {
  try {
    const responce = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: query,
        Language: 'UA',
      },
    });
    return responce.data.data.filter(
      (item: { TypeOfWarehouse: string }) =>
        String(item.TypeOfWarehouse) === 'f9316480-5f2d-425d-bc2c-ac7cd29decf0'
    );
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
