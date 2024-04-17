import { GeonameApi } from "../../app/api";
import React, { useState, useEffect } from "react";
import TableView from "./tableView";
import { CityResponse } from "../../model/model";

const AddressApi: React.FC = () => {
  const [cityResponse, setCityResponse] = useState<CityResponse>({
    total_count: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(GeonameApi)
        .then((response) => response)
        .then((res) => res.json())
        .then((data: CityResponse) => setCityResponse(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="">
      <TableView data={cityResponse} />
    </div>
  );
};

export default AddressApi;
