import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ForecastDataState from "../../Interfaces/ForecastDataState";
import { axiosInstance } from "../../config/AxiosInstance";

export const fetchData = createAsyncThunk("data/fetchdata", async () => {
  try {
    const response = await axiosInstance.get(
      `forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&days=7&aqi=yes&q=Bengaluru`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const initialState: ForecastDataState = {
  status: "default",
  data: undefined,
};

export const ForecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      if (!action.payload) return;
      console.log("action", action.payload);
    })
  },
});

export default ForecastSlice.reducer;
