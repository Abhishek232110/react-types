import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TableData from "../table/components";
import WeatherData from "../weather";
import WeatherResponse from "../weather/components/weatherRes";
import AddressApi from "../table/components/addressApi";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableData />}>
            <Route index path="" element={<AddressApi />} />
            <Route
              path="weather/:geoname_id"
              element={<WeatherResponse />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
