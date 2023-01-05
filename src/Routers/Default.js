// import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function Default() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Default;
