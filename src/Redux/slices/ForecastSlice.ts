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
  data: {
    location: {
      country: "",
      region: "",
      name: "",
      localtime: "",
    },
    dayForecast: [],
    currentData: {
      uv: 0,
      wind_kmph: 0,
      humidity: 0,
      vis_km: 0,
      aqi: 0,
      sunrise: "",
      sunset: "",
      temp_c: 0,
      temp_f: 0,
      condition: "",
      is_day: false,
      chance_of_rain: 0,
    },
  },
};

export const ForecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.status = "success";
        console.log("action", action.payload);
        const { location, forecast } = action.payload.data;

        // setting location
        state.data.location.country = location?.country;
        state.data.location.region = location?.region;
        state.data.location.name = location?.name;
        state.data.location.localtime = location?.localtime;

        state.data.dayForecast = forecast.forecastday.map(
          (foreCastItem: any) => {
            return {
              date: foreCastItem.date,
              avgtemp_c: foreCastItem.day.avgtemp_c,
              avgtemp_f: foreCastItem.day.avgtemp_f,
              condition: foreCastItem.day.condition.text,
            };
          }
        );
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      });
  },
});

export default ForecastSlice.reducer;
