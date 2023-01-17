import { useLayoutEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import openBg from "../Functions/openBg";
import BackClickButton from "./BackClickButton";
import theme from "../styles/theme";

const Skills = styled.ul`
  display: flex;
  justify-content: left;
  font-family: "Poppins", sans-serif;
  margin-top: 5rem;
  & li {
    font-size: 1.1vw;
    padding: 1vw;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    background-color: red;
    margin-right: 1rem;
    &:nth-last-child(2) {
      background-color: navy;
    }
    &:nth-last-child(1) {
      margin: 0;
      background-color: orange;
    }
  }
`;
const Left = styled.div`
  width: 50%;
  margin-right: 10%;
`;
const Right = styled.div`
  width: 40%;
`;
const Link = styled.a`
  font-weight: bold;
  font-size: 1vw;
  border: 2px solid black;
  margin-top: 1rem;
  padding: 0.5vw 3vw;
  border-radius: 1rem;
  margin-right: 2rem;
`;

const Img = styled.img`
  width: 100%;
`;

const TitleName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Acc = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 3rem;
  font-size: 0.9vw;
`;

const Wrap = styled.div`
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 13vw;
    width: 100%;
    height: 100vh;
    ${Right} {
      width: 50%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ${Left} {
      margin: 0 0 3rem 0;
      width: 50%;
      align-items: center;
      justify-content: center;
    }
    ${Skills} {
      justify-content: center;
    }
    ${Link} {
      margin-right: 0;
    }
  }
  background-color: white;
  padding-top: 200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

function Section1() {
  const bg = useRef();
  useLayoutEffect(() => {
    openBg(bg);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <BackClickButton />
        <Wrap ref={bg}>
          <Left>
            <Img src="img/img_portfolio1.png" alt="PFimg" />
          </Left>
          <Right>
            <TitleName>REACT MOVIE APP</TitleName>
            <Acc>
              리액트를 학습하며 제작한 데스크탑 페이지입니다.
              <br />
              <br />칸 국제영화제에 출품한 국내 작품을 연도별로 모아볼 수 있으며, 마우스 hover 시 작품 정보를 확인할 수
              있습니다.
            </Acc>
            <Link href="https://jeonghodong.github.io/react_movie_app/" target="_blank" rel="noreferrer">
              Link
            </Link>
            <Link href="https://github.com/jeonghodong/react_movie_app" target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Skills>
              <li>React</li>
              <li>Sass / Scss</li>
              <li>CSS module</li>
            </Skills>
          </Right>
        </Wrap>
      </>
    </ThemeProvider>
  );
}

export default Section1;
