import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import openBg from "../Functions/openBg";
import ChartImg from "../asset/chart.PNG"
import BackClickButton from "./BackClickButton";


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

const GoLink = styled.a`
  color:#5a58d7a3 !important ;
`;

function Section4() {
  const bg = useRef();
  useLayoutEffect(() => {
    openBg(bg);
  }, []);
  return (
    <Wrap ref={bg}>
      <BackClickButton />
      <Paper>
        <TitleText>Photography Site</TitleText>
        <SkillBox>
          <SkillText>HTML</SkillText>
          <SkillText>CSS</SkillText>
          <SkillText>Javascript</SkillText>
          <SkillText>Media Query</SkillText>
        </SkillBox>
        <MovieImg src={ChartImg} alt="ChartImg" />
        <InText>안녕하세요. 이 차트앱의 설명글입니다. 안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.</InText>
        <MovieImg src={ChartImg} alt="ChartImg" />
        <InText>안녕하세요. 이 차트앱의 설명글입니다. 안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.안녕하세요. 이 차트앱의 설명글입니다.</InText>
        <MovieImg src={ChartImg} alt="ChartImg" />
        {/*  */}
        <GoLink href="https://jeonghodong.github.io/photography_site_figma_clone/" target="_blank" rel="noreferrer" >
          https://jeonghodong.github.io/photography_site_figma_clone/</GoLink>
      </Paper>
    </Wrap>
  );
}

export default Section4;
