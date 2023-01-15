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

const Section = styled.span`
  background-color: black;
  width: 50%;
  height: 600px;
  border-radius: 10px;
  display: block;
`;
const Section1 = styled(Section)`
  background-color: blue;
`;
const Section2 = styled(Section)`
  background-color: red;
`;
const SectionWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const PortfolioBox = forwardRef((_, folio) => {
  return (
    <Wrap id="port" ref={folio}>
      <TitleText>Portfolio</TitleText>
      <SectionWrap>
        <Section> </Section>
        <Section1> </Section1>
        <Section2> </Section2>
      </SectionWrap>
    </Wrap>
  );
});

export default PortfolioBox;
