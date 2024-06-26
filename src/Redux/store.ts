import { configureStore } from "@reduxjs/toolkit";
import ForecastReducer from "./slices/ForecastSlice";

const store = configureStore({
  reducer: {
    forecast: ForecastReducer,
},
devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;