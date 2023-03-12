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
          리액트로 포트폴리오용 사이트를 만들기 전 고민이 많았습니다.<br /><br />
          당연 템플릿 오픈 소스도 많이 있었구요.<br /><br />
          "흔히 1개의 페이지에 스크롤 식으로 해서 만들까.." 하다가 문득 든 생각이<br /><br />
          "HTML, CSS, JS로 만들면 되지 굳이 리액트를 써서 만들어야하나?" 라고<br /><br />
          생각이 되었고 리액트는 SPA로서 앱과 같은 경험을 제공해주니 리액트를 이용하여<br /><br />
          역동적이고 심플한 포트폴리오용 사이트를 보여주고 싶었습니다. </InText>
      </Paper>
    </Wrap>
  );
}

export default Section2;
