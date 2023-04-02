/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../styles/theme";
import openBg from "../Functions/openBg";
import portImg1 from "../asset/port_1.gif"
import portImg2 from "../asset/port_2.gif"
import BackClickButton from "./BackClickButton";
import closeBg from "../Functions/closeBg";



const Paper = styled.div`
    position:relative;
    background-color:white;
    width: 100vh;
    max-width: 100%;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
    margin: 2rem auto;
`;
const TitleText = styled.h1`
  font-size:5rem;
  margin-bottom:2rem;
  font-weight:lighter;
`;
const InText = styled.h1`
  word-wrap:break-word;
  margin-bottom:2rem;
  margin-top:2rem;
  font-weight:300;
  line-height:24px;
`;

const MovieImg = styled.img`
  max-width:100%;
  margin:2rem 0 2rem 0;
`;

const SkillBox = styled.div`
  margin-bottom:3rem;
`;

const SkillText = styled.span`
  font-size:1rem;
  border:.5px solid black;
  border-radius:10px;
  padding:1.5px 10px;
  font-weight:lighter;
  margin-right:1rem;
  &:nth-last-child(){
    margin:0;
  }
`;

const Wrap = styled.div`
    background-color:#5a58d7a3;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    overflow-y: auto;
              @media ${(props) => props.theme.tablet} {
    ${SkillBox} {
      display:flex;
      flex-direction: column;
    }
    ${SkillText}{
      border:1px solid black;
      font-size: 2.5vw;
      width:50%;
      margin-bottom:1rem;
      padding: 0.3rem;
      &:nth-last-child(){
        margin:0;
      }
    }
  }
`;

function Section2() {
  const bg = useRef();
  const WrapBg = useRef();
  const back = useNavigate();


  useLayoutEffect(() => {
    // FadeIn 효과
    openBg(bg);
    WrapBg.current.animate(
      [
        { opacity: "0" },
        { opacity: "1" },
      ],
      {
        delay: 0,
        duration: 1000,
        easing: "ease",
        iterations: 1,
      }
    );
  }, []);

  // FadeOut 효과
  const onClick = () => {
    closeBg(bg);
    WrapBg.current.animate(
      [
        { opacity: "1" },
        { opacity: "0" },
      ],
      {
        delay: 0,
        duration: 700,
        easing: "ease",
        iterations: 1,
      }
    );
    setTimeout(() => {
      back("/About#port");
    }, 500);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={WrapBg}>
        <Paper ref={bg}>
          <BackClickButton onClick={onClick} />
          <TitleText>This Portfolio</TitleText>
          <SkillBox>
            <SkillText>React</SkillText>
            <SkillText>Sass(Scss)</SkillText>
            <SkillText>Styled Components</SkillText>
            <SkillText>Chart.js</SkillText>
            <SkillText>Media Query</SkillText>
            <SkillText>CRA</SkillText>
          </SkillBox>
          <MovieImg src={portImg1} alt="ChartImg" />
          <InText>
            안녕하세요. 정호동입니다.<br /><br />
            저는 리액트로 포트폴리오 용 사이트를 만들기 전 고민이 많았습니다.<br /><br />
            당연 주변을 둘러보면 템플릿 오픈 소스의 유혹도 있었고요.<br /><br />
            "흔히 1개의 페이지에 스크롤 식으로 해서 만들까.." 하다가 문득 든 생각이<br /><br />
            "HTML, CSS, JS로 만들면 되지 굳이 리액트를 써서 만들어야 하나?"라고<br /><br />
            생각이 되었고 리액트는 SPA로서 앱과 같은 경험을 제공해 주니 리액트를 이용하여<br /><br />
            역동적이고 심플한 포트폴리오 용 사이트를 보여주고 싶었습니다.<br /><br />
            <MovieImg src={portImg2} alt="ChartImg" />
            이번 작업을 진행하며 막혔었던 부분 중에서 2가지가 기억이나서 아래에 정리해보았습니다.<br /><br />
            1. 렌더 시 fade-in-out 효과 시 화면 깜빡임 현상으로 인한 불편한 사용자 경험<br /><br />
            2. img들의 느린 렌더링으로 인한 불편한 사용자 경험<br /><br /><br />
            <hr />
            1번째 문제를 해결한 방법<br /><br />
            useEffect가 아닌 useLayoutEffect를 사용한 방법입니다.<br /><br />
            useEffect의 이펙트는 render 와 paint 된 후 실행됩니다.<br /><br />
            useLayoutEffect의 이펙트는  render 된 후 실행되며, 그 이후에 paint가 됩니다.<br /><br />
            즉 useLayoutEffect를 사용할 시 마지막에 paint가 되기 때문에 화면 깜빡임이 해결됩니다.<br /><br />
            공식 문서에선 useEffect의 사용만을 선호하고 있지만 useEffect에 dom에 영향을 주는 코드가 있을 경우 useLayoutEffect를 사용해야 특정 dom 렌더 시 깜빡임 현상이 해결된다는 것을 알았습니다.<br /><br /><br />
            <hr />
            2번째 문제를 해결한 방법<br /><br /> public 폴더가 아닌 asset 폴더에 img를 넣은 방법입니다.<br /><br />
            이 경우는 컴파일 시에 필요한 파일인지 아닌지에 따라 달라졌습니다.<br /><br />
            파비콘과 같은 index.html 내부에서 직접 사용하여 컴파일 단계가 필요 없는 파일들은 public 파일에 저장하고 컴포넌트 내부에서 사용해야 하는 이미지 파일 같은 경우는 asset 폴더에 위치시켰습니다.<br /><br /><br />
            <hr />
            오류가 나면서 나아갈 길이 막힌다는 건 달갑지 않은 일이지만<br /><br />
            그 문제를 해결해나간 경험들이 곧 개발해 나가며 필요한 열쇠 꾸러미가 된다고 생각합니다.
          </InText>
        </Paper>
      </Wrap>
    </ThemeProvider>
  );
}

export default Section2;
