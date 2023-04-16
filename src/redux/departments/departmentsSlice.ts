import { createSlice } from "@reduxjs/toolkit";
import { getDepartments, getPostboxes } from "./departmentsOperations";
import { toast } from "react-toastify";

const initialState = {
  departments: [] as { Description: string }[],
  currentCity: "",
  error: false as any,
  isLoading: false,
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    currentCityDepartments(state, action) {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDepartments.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getDepartments.fulfilled, (state, action) => {
        if (!action.payload || action.payload.length === 0) {
          toast.error(`Невірна назва населеного пункту!`);
          state.isLoading = false;
          return;
        }
        state.departments = action.payload.map(
          (item: { Description: any }) => item.Description
        );
        state.isLoading = false;
      })
      .addCase(getDepartments.rejected, (state, action) => {
        toast.error(`Помилка мережі`);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPostboxes.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getPostboxes.fulfilled, (state, action) => {
        if (!action.payload || action.payload.length === 0) {
          toast.error(`Невірна назва населеного пункту!`);
          state.isLoading = false;
          return;
        }
        state.departments = action.payload.map(
          (item: { Description: any }) => item.Description
        );
        state.isLoading = false;
      })
      .addCase(getPostboxes.rejected, (state, action) => {
        toast.error(`Помилка мережі`);
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const departmentsReducer = departmentsSlice.reducer;

export const { currentCityDepartments } = departmentsSlice.actions;
