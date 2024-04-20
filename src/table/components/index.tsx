import { Outlet } from "react-router-dom";
import HeaderPage from "../../home/components/header";
import AddressApi from "./addressApi";

export default function TableData() {
  return (
    <div className="">
      <HeaderPage />

      <Outlet />
    </div>
  );
}
