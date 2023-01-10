import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderData from "../Data/HeaderData";

const Wrap = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #0000c5;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 0 5vw 0 5vw;
  z-index: 2;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.5vw;
  padding: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  & li {
    margin-left: 2rem;
    &:nth-child(1) {
      margin: 0;
    }
  }
`;

const onClick = () => {
  window.scrollTo(0, 0);
};

function Header() {
  return (
    <Wrap>
      <Logo>PortFolio</Logo>
      <Ul>
        {HeaderData.map((v) => (
          <li key={v.name}>
            <Link onClick={onClick} to={v.to}>
              {v.name}
            </Link>
          </li>
        ))}
      </Ul>
    </Wrap>
  );
}

export default Header;
