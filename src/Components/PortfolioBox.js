import { forwardRef } from "react";
import styled from "styled-components";
// import PortFolioData from "../Data/PortFolioData";

const Wrap = styled.div`
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

const TitleText = styled.h2`
  font-size: 2.5vw;
  font-weight: bold;
  color: #0000c5;
  padding: 12rem 0 8rem 0;
  text-align: center;
`;

const PortfolioBox = forwardRef((_, folio) => {
  return (
    <Wrap id="port" ref={folio}>
      <TitleText>Portfolio</TitleText>
    </Wrap>
  );
});

export default PortfolioBox;
