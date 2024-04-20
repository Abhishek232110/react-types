import { useSelector } from "react-redux";
import "./weather.css";
import weatherBgImage from "../../assets/weather.png";

export default function WeatherDetails() {
  const { weather, loading } = useSelector((state: any) => state.data);

  if (loading === "idle") {
    return <div>loading</div>;
  }
  return (
    <div className="flex flex-col justify-center">
      <img src={weatherBgImage} className="h-72" />
      <div className="flex justify-center pl-10 ">
        <div className="">
          <h1 className=" text-4xl ">Weather of {weather.name}</h1>
          <p className=" text-red-400"></p>
          <p className=" text-xl font-mono  font-medium pt-4">
            City : {weather.name},IN
          </p>
          <p className=" font-medium">Feels like max temp</p>
          <div className="md:grid-cols-2 grid grid-cols-1 gap-4 py-4    ">
            <div className="">
              <p className="text-xl text-red-500">Weather Details </p>
              <p> Weather: {weather.weather[0].main}</p>
              <p> Description: {weather.weather[0].description}</p>
              <p>icon: {weather.weather[0].icon}</p>
            </div>
            <div className="">
              <p className="text-xl text-red-500">Temperature Details</p>
              <p>Temp... : {weather.main.temp_max} F</p>
              <p> Feel... : {weather.main.temp_min} F</p>
              <p>Pressure: {weather.main.pressure}</p>
              <p>Humidity: {weather.main.humidity}</p>
            </div>
            <div className="">
              <p className="text-xl text-red-500">Wind Details</p>
              <p>Wind speed : {weather.wind.speed}</p>
              <p> Deg : {weather.wind.deg}</p>
            </div>
            <div className="">
              <p className="text-xl text-red-500">Country Details</p>
              <p> {weather.sys.Country}</p>
              <p> {weather.sys.sunrise}</p>
              <p> {weather.sys.sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
