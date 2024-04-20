import { useDispatch } from "react-redux";
import AppRoutes from "./app/route";
import HomePage from "./home";
import { GeonameApiData } from "./table/tableSlice";
import { useEffect } from "react";

function App() {
  // const dispatch = useDispatch<any>();
  // useEffect(() => {
  //   dispatch(GeonameApiData());
  // }, []);
  return (
    <div className="">
      <AppRoutes />
    </div>
  );
}

export default App;
