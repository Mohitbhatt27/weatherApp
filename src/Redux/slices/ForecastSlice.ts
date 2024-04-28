import { createSlice } from '@reduxjs/toolkit'
import ForecastDataState from "../../Interfaces/ForecastDataState";



const initialState : ForecastDataState = {
  status: 'default',
  data: undefined,
}

export const ForecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
  },
  extraReducers: ()=>{
  }
})

export default ForecastSlice.reducer;