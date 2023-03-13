/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import openBg from "../Functions/openBg";
import portImg from "../asset/sns_home.png"
import BackClickButton from "./BackClickButton";
import closeBg from "../Functions/closeBg";



const Wrap = styled.div`
    background-color:#5a58d7a3;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    overflow-y: auto;
`;

const Paper = styled.div`
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
    <Wrap ref={WrapBg}>
      <BackClickButton onClick={onClick} />
      <Paper ref={bg}>
        <TitleText>This Portfolio</TitleText>
        <SkillBox>
          <SkillText>React</SkillText>
          <SkillText>Scss/Sass</SkillText>
          <SkillText>Styled Component (Css in Js)</SkillText>
          <SkillText>Chart.js</SkillText>
          <SkillText>Media Query</SkillText>
          <SkillText>CRA</SkillText>
        </SkillBox>
        <MovieImg src={portImg} alt="ChartImg" />
        <InText>
          안녕하세요. 정호동입니다.<br /><br />
          저는 리액트로 포트폴리오 용 사이트를 만들기 전 고민이 많았습니다.<br /><br />
          당연 주변을 둘러보면 템플릿 오픈 소스의 유혹도 있었고요.<br /><br />
          "흔히 1개의 페이지에 스크롤 식으로 해서 만들까.." 하다가 문득 든 생각이<br /><br />
          "HTML, CSS, JS로 만들면 되지 굳이 리액트를 써서 만들어야 하나?"라고<br /><br />
          생각이 되었고 리액트는 SPA로서 앱과 같은 경험을 제공해 주니 리액트를 이용하여<br /><br />
          역동적이고 심플한 포트폴리오 용 사이트를 보여주고 싶었습니다.<br /><br />
          <MovieImg src={portImg} alt="ChartImg" />
          이번 작업을 진행하며 막혔었던 점은<br /><br />
          1. 렌더 시 fade-in-out 효과 시 화면 깜빡임 현상으로 인한 불편한 사용자 경험<br /><br />
          2. img들의 느린 렌더링으로 인한 불편한 사용자 경험<br /><br /><br />
          1번째 문제를 해결한 방법은 useEffect가 아닌 useLayoutEffect를 사용한 방법입니다.<br /><br />
          useEffect의 이펙트는 DOM이 화면에 그려진 이후에 호출이 됩니다.<br /><br />
          허나 useLayoutEffect의 이펙트는 DOM이 화면에 그려지기 전에 호출됩니다.<br /><br />
          공식 문서에선 useEffect의 사용만을 선호하고 있지만 useEffect에 dom에 영향을 주는 코드가 있을 경우 useLayoutEffect를 사용해야 특정 dom 렌더 시 깜빡임 현상이 해결된다는 것을 알았습니다.<br /><br /><br />
          2번째 문제를 해결한 방법은 public 폴더가 아닌 asset 폴더에 img를 넣은 방법입니다.<br /><br />
          이 경우는 컴파일 시에 필요한 파일인지 아닌지에 따라 달라졌습니다.<br /><br />
          파비콘과 같은 index.html 내부에서 직접 사용하여 컴파일 단계가 필요 없는 파일들은 public 파일에 저장하고 컴포넌트 내부에서 사용해야 하는 이미지 파일 같은 경우는 asset 폴더에 위치시켰습니다.<br /><br />
        </InText>
      </Paper>
    </Wrap>
  );
}

export default Section2;
