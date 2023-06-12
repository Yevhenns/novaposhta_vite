export const getDepartmentsArray = (state: { departments: { departments: string[]; }; }) =>
  state.departments.departments;
export const getIsLoading = (state: { departments: { isLoading: boolean; }; }) => state.departments.isLoading;
export const getCurrentCity = (state: { departments: { currentCity: string; }; }) => state.departments.currentCity;
