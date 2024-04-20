import {
  CaseReducer,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { geonameApi } from "../app/api";
import axios from "axios";
import { CityResponse, Coordinates, WeatherData } from "../model/model";

// First, create the thunk
export const GeonameApiData = createAsyncThunk("geonameApi", async () => {
  const response = await axios.get(geonameApi);
  return response.data;
});
export const WeatherApiData = createAsyncThunk(
  "weatherApi",
  async (data: { lat: number; lon: number }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=cc9c98aab8151f639fa0efe716e3c880`
    );
    return response.data;
  }
);

interface UsersState {
  city: CityResponse;
  weather: WeatherData[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: "error";
}

const initialState = {
  city: {
    total_count: 0,
    results: [],
  },
  weather: [],
  loading: "idle",
  error: "error",
} satisfies UsersState as UsersState;

type State = number;
const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
  state + action.payload;
// Then, handle actions in your reducers:
const GeonameApiSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    cityData: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(WeatherApiData.pending, (state) => {
        state.loading = "idle";
      })
      .addCase(WeatherApiData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.weather = action.payload;
      })
      .addCase(WeatherApiData.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { cityData } = GeonameApiSlice.actions;
export default GeonameApiSlice.reducer;
