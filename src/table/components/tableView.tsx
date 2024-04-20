import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/reducers";
import { City } from "../../model/model";
import FilterData from "./filterData";
// import FilterData from "./filterData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableView() {
  const weatherTemperature = useSelector((state: any) => state.data?.weather);

  const cityResponse = useSelector((state: RootState) => state.data?.city);

  const [filteredData, setFilteredData] = useState<City[]>(
    cityResponse.results ? cityResponse.results : []
  );
  // console.log("sndfkssdfsd", filteredData);

  useEffect(() => {
    setFilteredData(cityResponse.results ? cityResponse.results : []);
    let filterRes = cityResponse.results?.filter((item) => item.name);
    if (filterRes) {
      setFilteredData(filterRes);
    }
  }, [cityResponse]);

  // const onQueryChanges=useSelector((state)=>state.data)

  const onQueryChange = (s: String) => {
    console.log(s);
    const filterRes = cityResponse.results?.filter((item) =>
      item.name.toLowerCase().includes(s.toLowerCase())
    );
    console.log("filterRes", filterRes);
    if (filterRes) {
      setFilteredData(filterRes);
      if (filterRes.length == 0) {
        console.log("No results found");
      }
    }
  };

  return (
    <>
      <div className=" md:space-x-4 md:pt-10 pt-3  px-10">
        <div className=" md:pl-4 pl-0 space-y-3">
          <h1 className="text-xl">Filetrs</h1>
          <FilterData onQueryChange={onQueryChange} />
        </div>
        <div className=" md:h-3/4 mt-4">
          <div className="overflow-y-scroll   h-screen">
            <TableContainer component={Paper}>
              <Table sx={{}} aria-label="customized table">
                <TableRow className=" text-zinc-700  bg-zinc-300  cursor-pointer">
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell className="xs">GeonameID</StyledTableCell>
                  <StyledTableCell>CityName</StyledTableCell>
                  <StyledTableCell>CountryNameEN</StyledTableCell>
                  <StyledTableCell>ASCIIName</StyledTableCell>
                  <StyledTableCell>AlternateNames</StyledTableCell>
                  <StyledTableCell>Population</StyledTableCell>
                  <StyledTableCell>DigitalElvationModel</StyledTableCell>
                  <StyledTableCell>Timezone</StyledTableCell>
                  <StyledTableCell>Countrycode</StyledTableCell>
                  <StyledTableCell>Coordinates</StyledTableCell>
                  <StyledTableCell>
                    MaxTemperature&nbsp;in&nbsp;F
                  </StyledTableCell>
                  <StyledTableCell>
                    MinTemperature&nbsp;in&nbsp;F
                  </StyledTableCell>
                </TableRow>
                <TableBody className="w-full bg-neutral-100">
                  {filteredData.map((element, index) => {
                    return (
                      <>
                        <StyledTableRow className="text-center  hover:bg-zinc-200">
                          <StyledTableCell>{index}</StyledTableCell>
                          <StyledTableCell>
                            {element.geoname_id}
                          </StyledTableCell>
                          <StyledTableCell className="border-b-2">
                            <Link
                              to={`/weather/${element.geoname_id}`}
                              className="border-b border-indigo-300  hover:bg-zinc-400 hover:text-white  "
                            >
                              {element.name}
                            </Link>
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.cou_name_en}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.ascii_name}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.alternate_names}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.population}
                          </StyledTableCell>
                          <StyledTableCell>{element.dem}</StyledTableCell>
                          <StyledTableCell>{element.timezone}</StyledTableCell>
                          <StyledTableCell>
                            {element.country_code}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.coordinates.lat},{element.coordinates.lon}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.ascii_name === weatherTemperature?.name
                              ? weatherTemperature.main.temp_max
                              : null}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.ascii_name === weatherTemperature?.name
                              ? weatherTemperature.main.temp_min
                              : null}
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}
