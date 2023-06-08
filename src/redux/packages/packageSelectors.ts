export const getPackagesArray = (state: { packages: { packagesAll: IHistoryListData[]; }; }) => state.packages.packagesAll;
export const getIsLoading = (state: { packages: { isLoading: boolean; }; }) => state.packages.isLoading;
