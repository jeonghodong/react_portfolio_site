import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeaderData from "../Data/HeaderData";
import openBg from "../Functions/openBg";

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

const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background: inherit;
  font-size: 1.2vw;
`;

function Header({ onClick }) {
  const bg = useRef();

  useEffect(() => {
    openBg(bg);
  }, []);

  return (
    <Wrap ref={bg}>
      <Logo>PortFolio</Logo>
      <Ul>
        {HeaderData.map((v) => (
          <li key={v.id}>
            <Button
              type="button"
              onClick={() => {
                onClick(v.name);
              }}
            >
              {v.name}
            </Button>
          </li>
        ))}
      </Ul>
    </Wrap>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
