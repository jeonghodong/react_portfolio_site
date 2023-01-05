import { Link } from "react-router-dom";
import styled from "styled-components";
import ListData from "../Data/ListData";

const Wrap = styled.div`
  background-color: #9e9e9e;
  display: flex;
  position: fixed;
  width: 100%;
`;

const onClick = () => {
  window.scrollTo(0, 0);
};

function Sidebar() {
  return (
    <Wrap>
      <h2>PortFolio</h2>
      <ul>
        {ListData.map((v) => (
          <li key={v.name}>
            <Link onClick={onClick} to={v.to}>
              {v.name}
            </Link>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export default Sidebar;
