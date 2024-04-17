import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { WeatherApiData } from "../../table/tableSlice";
import { useEffect } from "react";
import WeatherDetails from "./weatherDetails";

export default function WeatherResponse() {
  const dispatch = useDispatch<any>();
  const id = useParams();
  const geonameData = useSelector((state: any) => state.data?.data[0]);
  const filterData = geonameData?.filter(
    (ele: any) => ele.geoname_id === id.geoname_id
  );
  useEffect(() => {
    if (filterData) {
      const { lon, lat } = filterData[0].coordinates;
      dispatch(WeatherApiData({ lon, lat }));
    }
  });

  return (
    <div>
      <WeatherDetails />
    </div>
  );
}
