export const getPackagesArray = (state: {
  packages: { packagesAll: HistoryListData[] };
}) => state.packages.packagesAll;
export const getIsLoading = (state: { packages: { isLoading: boolean } }) =>
  state.packages.isLoading;
