import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { WeatherApiData } from "../../table/tableSlice";
import { useEffect } from "react";
import WeatherDetails from "./weatherDetails";
import { RootState } from "../../app/reducers";

export default function WeatherResponse() {
  const dispatch = useDispatch<any>();
  const id = useParams();
  const cityData = useSelector((state: RootState) => state.data?.city);

  useEffect(() => {
    // console.log(`${id.geoname_id}`);
    const filterCityData = cityData?.results?.filter(
      (ele: any) => ele.geoname_id === id.geoname_id
    );
    // console.log(filterCityData);
    if (filterCityData && filterCityData.length > 0) {
      const { lon, lat } = filterCityData[0]?.coordinates;
      dispatch(WeatherApiData({ lon, lat }));
    }
  }, [cityData]);
  return (
    <div>
      <WeatherDetails />
    </div>
  );
}
