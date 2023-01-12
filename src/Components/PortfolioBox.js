import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PortFolioData from "../Data/PortFolioData";

const Wrap = styled.div`
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

const TitleText = styled.h2`
  font-size: 2.5vw;
  font-weight: bold;
  color: #0000c5;
  padding: 5rem 0 5rem 0;
  text-align: center;
`;

const FolioUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const PortfolioBox = forwardRef((_, folio) => {
  return (
    <Wrap id="port" ref={folio}>
      <TitleText>Portfolio</TitleText>
      <FolioUl>
        {PortFolioData.map((v) => (
          <Link to={v.to}>
            <li key={v.id}>
              <h2>{v.name}</h2>
            </li>
          </Link>
        ))}
      </FolioUl>
    </Wrap>
  );
});

export default PortfolioBox;
