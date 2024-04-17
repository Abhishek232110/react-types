import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableData from "../table/components";
import WeatherData from "../weather";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableData />}></Route>
          <Route
            path={`/weather/:geoname_id`}
            element={<WeatherData />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
