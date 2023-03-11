import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import openBg from "../Functions/openBg";
import movieImg from "../asset/movie_app.PNG"
import BackClickButton from "./BackClickButton";


const Wrap = styled.div`
    background-color:#101e2678;
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
  color:#101e2678 !important ;
`;

function Section1() {
  const bg = useRef();
  const WrapBg = useRef();


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
        duration: 700,
        easing: "ease",
        iterations: 1,
      }
    );
  }, []);


  return (
    <Wrap ref={WrapBg} >
      <BackClickButton />
      <Paper ref={bg}>
        <TitleText>REACT MOVIE APP</TitleText>
        <SkillBox>
          <SkillText>React</SkillText>
          <SkillText>Scss/Sass</SkillText>
          <SkillText>Css Module (Css in Css)</SkillText>
          <SkillText>CRA</SkillText>
        </SkillBox>
        <MovieImg src={movieImg} alt="movieImg" />
        <InText>안녕하세요. 이 영화앱의 설명글입니다. 안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.</InText>
        <MovieImg src={movieImg} alt="movieImg" />
        <InText>안녕하세요. 이 영화앱의 설명글입니다. 안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.안녕하세요. 이 영화앱의 설명글입니다.</InText>
        <MovieImg src={movieImg} alt="movieImg" />
        {/*  */}
        <GoLink href="https://jeonghodong.github.io/react_movie_app/" target="_blank" rel="noreferrer" >
          https://jeonghodong.github.io/react_movie_app/</GoLink>
      </Paper>
    </Wrap>
  );
}

export default Section1;
