import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { City, CityResponse } from "../../model/model";
import FilterData from "./filterData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { genameMapData } from "../tableSlice";
import { info } from "console";
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

export default function TableView({ data }: { data: CityResponse }) {
  const dispatch = useDispatch<any>();
  const addTemp = useSelector((state: any) => state.data?.entities[0]);

  const [search, setSearch] = useState<any>("");
  const [filteredData, setFilteredData] = useState<City[]>(
    data.results ? data.results : []
  );
  useEffect(() => {
    setFilteredData(data.results ? data.results : []);
    let filterRes = data.results?.filter((item) => item.name);
    if (filterRes) {
      setFilteredData(filterRes);
      dispatch(genameMapData(filterRes));
    }
  }, [data]);

  // const onQueryChanges=useSelector((state)=>state.data)

  const onQueryChange = (s: String) => {
    const filterRes = data.results?.filter((item) =>
      item.name.toLowerCase().includes(s.toLowerCase())
    );
    if (filterRes) {
      setFilteredData(filterRes);
      if (filterRes.length == 0) {
        console.log("No results found");
      }
    }
  };
  // console.log(filteredData);
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
                  <StyledTableCell>MaxTemperature</StyledTableCell>
                  <StyledTableCell>MinTemperature</StyledTableCell>
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
                            {element.ascii_name === addTemp?.name
                              ? addTemp.main.temp_max
                              : null}
                          </StyledTableCell>
                          <StyledTableCell>
                            {element.ascii_name === addTemp?.name
                              ? addTemp.main.temp_min
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
