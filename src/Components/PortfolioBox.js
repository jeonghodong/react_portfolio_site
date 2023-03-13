import { forwardRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types'
import theme from "../styles/theme";
import SNSImg from "../asset/sns_home.png"
import portImg from "../asset/portfolio.png"
import photoImg from "../asset/photo_home.png"
import movieImg from "../asset/무비_home.png"

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
  cursor: pointer;
`;

const SectionWrap = styled.div`
  display: grid;
  row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr ));
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
  background-color: #00ff6f;
`;
const Bg2 = styled(Bg)`
  background-color: #0000c5;
`;
const Bg3 = styled(Bg)`
  background-color: #8c6f00;
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

const PortfolioBox = forwardRef(({ onClick }, folio) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap id="port" ref={folio}>
        <TitleText>Portfolio</TitleText>
        <SectionWrap>
          <Section onClick={() => onClick(1, true)}>
            <Bg >React Movie App</Bg>
            <Img src={movieImg} alt="movie_app" />
          </Section>
          <Section onClick={() => onClick(2, true)}>
            <Bg1>SNS Team Project</Bg1>
            <Img src={SNSImg} alt="sns_app" />
          </Section>
          <Section onClick={() => onClick(3, true)}>
            <Bg2>This Portfolio</Bg2>
            <Img src={portImg} alt="portfolio" />
          </Section>
          <Section onClick={() => onClick(4, true)}>
            <Bg3>Photography</Bg3>
            <Img src={photoImg} alt="portfolio" />
          </Section>
        </SectionWrap>
      </Wrap>
    </ThemeProvider>
  );
});

PortfolioBox.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PortfolioBox;
