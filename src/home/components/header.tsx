import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geonameApi } from "../../app/api";
import { CityResponse } from "../../model/model";
import { cityData } from "../../table/tableSlice";

export default function HeaderPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const apiUrl = `${geonameApi}?limit=100`;
    try {
      const response = await fetch(apiUrl)
        .then((response) => response)
        .then((res) => res.json())
        .then((data: CityResponse) => {
          dispatch(cityData(data));
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="md:text-2xl text-lg flex justify-center bg-zinc-400 text-white py-4">
      <p>Geonames - All Cities with population</p>
    </div>
  );
}
