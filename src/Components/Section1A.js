import { Link } from "react-router-dom";
import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  font-family: "Poppins", sans-serif;
  position: relative;
  background-color: #101e26;
  height: 100vh;
  z-index: 2;
`;

const TitleName = styled.h1`
  color: white;
  font-size: 5vw;
  font-weight: bold;
  text-align: right;
  position: relative;
  top: 35%;
  margin-right: 10rem;
`;

function Section1A() {
  return (
    <Wrap>
      <TitleName>REACT MOVIE APP</TitleName>
      <Link to="/Movie">
        <UpDownButton />
      </Link>
    </Wrap>
  );
}

export default Section1A;
