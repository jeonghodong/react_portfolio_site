import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const TitleText = styled.h2`
  font-size: 2.5vw;
  font-weight: bold;
  color: #0000c5;
  padding: 12rem 0 8rem 0;
  text-align: center;
`;

const Section = styled.div`
  width: 90%;
  height: 40vh;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const SectionWrap = styled.div`
  display: grid;
  row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: -1;
  border-radius: 10px;
`;
const Bg = styled.div`
  background-color: #101e26;
  color: white;
  font-size: 2.5vh;
  font-weight: bold;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 2rem;
  opacity: 0.95;
  &:hover {
    opacity: 0;
    transition: 0.5s;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
  }
`;
const Bg1 = styled(Bg)`
  background-color: #5a58d7;
`;
const Bg2 = styled(Bg)`
  background-color: #0000c5;
`;
const Wrap = styled.div`
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    ${TitleText} {
      font-size: 22px;
    }
  }
  font-family: "Poppins", sans-serif;
  padding-bottom: 10rem;
`;
const PortfolioBox = forwardRef((_, folio) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap id="port" ref={folio}>
        <TitleText>Portfolio</TitleText>
        <SectionWrap>
          <Section>
            <Link to="/MovieAbout">
              <Bg>React Movie App</Bg>
            </Link>
            <Img src="img/movie_app.PNG" alt="movie_app" />
          </Section>
          <Section>
            <Link to="/ChartAbout">
              <Bg1>React Chart App</Bg1>
            </Link>
            <Img src="img/chart.PNG" alt="chart_app" />
          </Section>
          <Section>
            <Link to="/PortfolioAbout">
              <Bg2>Portfolio</Bg2>
            </Link>
            <Img src="img/portfolio.png" alt="portfolio" />
            Portfolio
          </Section>
        </SectionWrap>
      </Wrap>
    </ThemeProvider>
  );
});

export default PortfolioBox;
