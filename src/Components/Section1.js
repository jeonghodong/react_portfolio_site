import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import openBg from "../Functions/openBg";
import movieImg from "../asset/무비_home.png"
import movieImg2 from "../asset/무비_클릭시_예고편.png"
import BackClickButton from "./BackClickButton";
import closeBg from "../Functions/closeBg";


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
        duration: 700,
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
    <Wrap ref={WrapBg} >
      <BackClickButton onClick={onClick} />
      <Paper ref={bg}>
        <TitleText>REACT MOVIE APP</TitleText>
        <SkillBox>
          <SkillText>React</SkillText>
          <SkillText>Scss/Sass</SkillText>
          <SkillText>Css Module (Css in Css)</SkillText>
          <SkillText>CRA</SkillText>
        </SkillBox>
        <MovieImg src={movieImg} alt="movieImg" />
        <InText>안녕하세요. 정호동입니다.<br /><br />
          이 프로젝트는 처음 React를 공부하고 프로젝트를 진행할 때 정말 많이 도움이 되었던 프로젝트입니다.<br /><br />
          이 앱은 개인 프로젝트이며 오픈 API를 활용한 React 영화 앱이고 카테고리 별로 이동이 가능하며 피드는 최신순으로 나열이 됩니다.<br />
        </InText >
        <MovieImg src={movieImg2} alt="movieImg" />
        <InText>특정한 영화를 클릭할 시 해당 영화의 예고편을 볼 수 있는 페이지로 이동합니다.</InText>
        <InText>반응형 작업은 아직 진행이 안되었습니다.<br /></InText>
        {/*  */}
        <GoLink href="https://jeonghodong.github.io/react_movie_app/" target="_blank" rel="noreferrer" >
          https://jeonghodong.github.io/react_movie_app/</GoLink>
      </Paper >
    </Wrap >
  );
}



export default Section1;
