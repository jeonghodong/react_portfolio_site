// import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Default() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Default;
