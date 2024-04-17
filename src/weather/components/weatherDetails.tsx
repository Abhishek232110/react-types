import { useState } from "react";
import { useSelector } from "react-redux";
import "./weather.css";
import weather from "../../assets/weather.png";
export default function WeatherDetails() {
  const [res, setRes] = useState();
  const { entities, loading } = useSelector((state: any) => state.data);

  if (loading === "idle") {
    return <div>loading</div>;
  }
  return (
    <div className="flex flex-col justify-center">
      <img src={weather} className="h-72" />
      <div className="flex justify-center pl-10 ">
        {entities.map((ele: any) => {
          return (
            <div className="">
              <h1 className=" text-4xl ">Weather of {ele.name}</h1>
              <p className=" text-red-400"></p>
              <p className=" text-xl font-mono  font-medium pt-4">
                City : {ele.name},IN
              </p>
              <p className=" font-medium">Feels like max temp</p>
              <div className="md:grid-cols-2 grid grid-cols-1 gap-4 py-4    ">
                <div className="">
                  <p className="text-xl text-red-500">Weather Details </p>
                  <p> Weather: {ele.weather[0].main}</p>
                  <p> Description: {ele.weather[0].description}</p>
                  <p>icon: {ele.weather[0].icon}</p>
                </div>
                <div className="">
                  <p className="text-xl text-red-500">Temperature Details</p>
                  <p>Temp... : {ele.main.temp_max} F</p>
                  <p> Feel... : {ele.main.temp_min} F</p>
                  <p>Pressure: {ele.main.pressure}</p>
                  <p>Humidity: {ele.main.humidity}</p>
                </div>
                <div className="">
                  <p className="text-xl text-red-500">Wind Details</p>
                  <p>Wind speed : {ele.wind.speed}</p>
                  <p> Deg : {ele.wind.deg}</p>
                </div>
                <div className="">
                  <p className="text-xl text-red-500">Country Details</p>
                  <p> {ele.sys.Country}</p>
                  <p> {ele.sys.sunrise}</p>
                  <p> {ele.sys.sunset}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
