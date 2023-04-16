import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import { packagesReducer } from './packages/packageSlice';
import { departmentsReducer } from './departments/departmentsSlice';

const packagesPersistConfig = {
  key: 'packages',
  storage,
};
const departmentsPersistConfig = {
  key: 'departments',
  storage,
};

export const store = configureStore({
  reducer: {
    packages: persistReducer(packagesPersistConfig, packagesReducer),
    departments: persistReducer(departmentsPersistConfig, departmentsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
