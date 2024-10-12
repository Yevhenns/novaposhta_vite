import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_API_KEY;

type TypeGetPackages = {
  Number: string;
  Status: string;
  WarehouseSender: string;
  WarehouseRecipient: string;
};

export const getPackage = createAsyncThunk<
  TypeGetPackages,
  string,
  { rejectValue: string }
>('packages/getByNumber', async (number, { rejectWithValue }) => {
  try {
    const responce = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: API_KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: number,
          },
        ],
      },
    });
    return responce.data.data[0];
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
