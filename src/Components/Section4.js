import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import openBg from "../Functions/openBg";
import photoImg from "../asset/photo_home.png"
import photoImg1 from "../asset/photo_section.png"
import photoImg2 from "../asset/photo_section2.png"
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

const GoLink = styled.a`
  color:#5a58d7a3 !important ;
`;

function Section4() {
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
        <TitleText>Photography Site</TitleText>
        <SkillBox>
          <SkillText>HTML</SkillText>
          <SkillText>CSS</SkillText>
          <SkillText>Javascript</SkillText>
          <SkillText>Media Query</SkillText>
        </SkillBox>
        <MovieImg src={photoImg} alt="ChartImg" />
        <InText>
          안녕하세요. 정호동입니다.<br /><br />
          이 작업물은 HTML, CSS, JS를 공부할 때 Figma 자료들을 이용을 많이 하였습니다.<br /><br />
          그때 기본적인 HTML, CSS를 익히는데 큰 도움이 많이 되었고 이 Photography Site는 그중 하나입니다.</InText>
        <MovieImg src={photoImg1} alt="ChartImg" />
        <InText>
          Figma 자료들을 클론 하며 배워갔던 것들 중 가장 큰 배움은 CSS의 레이아웃 배치의 이해였습니다.<br /><br />
          float, flex, grid, postion의 사용에 큰 배움을 얻었습니다.
        </InText>
        <MovieImg src={photoImg2} alt="ChartImg" />
        {/*  */}
        <GoLink href="https://jeonghodong.github.io/photography_site_figma_clone/" target="_blank" rel="noreferrer" >
          https://jeonghodong.github.io/photography_site_figma_clone/</GoLink>
      </Paper>
    </Wrap>
  );
}

export default Section4;
