import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import ListData from "../Data/ListData";

const Wrap = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 15%;
`;
const Right = styled.div`
  width: 85%;
`;
const onClick = () => {
  window.scrollTo(0, 0);
};
function Default() {
  return (
    <Wrap>
      <Left>
        {ListData.map((v) => (
          <Sidebar onClick={onClick} name={v.name} to={v.to} />
        ))}
      </Left>
      <Right>
        <Outlet />
      </Right>
    </Wrap>
  );
}

export default Default;
