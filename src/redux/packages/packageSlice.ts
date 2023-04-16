import { createSlice } from "@reduxjs/toolkit";
import { getPackage } from "./packageOperations";
import { toast } from "react-toastify";

const initialState = {
  packagesAll: [] as {
    number: string;
    status: string;
    sender: string;
    recipient: string;
  }[],
  error: false as any,
  isLoading: false,
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    clearAll(state) {
      state.packagesAll = [];
    },
    deleteItem(state, action) {
      state.packagesAll = state.packagesAll.filter(
        (item) => item.number !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getPackage.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getPackage.fulfilled, (state, action) => {
        if (!action.payload) {
          toast.error(`Невірний номер посилки!`);
          state.isLoading = false;
          return;
        }
        state.packagesAll.push({
          number: action.payload.Number,
          status: action.payload.Status,
          sender: action.payload.WarehouseSender,
          recipient: action.payload.WarehouseRecipient,
        });
        state.isLoading = false;
      })
      .addCase(getPackage.rejected, (state, action) => {
        toast.error(`Помилка мережі!`);
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const packagesReducer = packagesSlice.reducer;

export const { clearAll } = packagesSlice.actions;
export const { deleteItem } = packagesSlice.actions;
