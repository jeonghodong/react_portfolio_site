/* eslint-disable import/no-unresolved */
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import openBg from "../Functions/openBg";
import snsImg1 from "../asset/sns_page진입.gif"
import snsImg2 from "../asset/sns_게시물작성.gif"
import snsImg3 from "../asset/sns_게시물삭제.gif"
import snsImg4 from "../asset/sns_댓글작성삭제.gif"
import snsImg5 from "../asset/sns_좋아요팔로우취소등록.gif"
import snsImg6 from "../asset/sns_무한스크롤상단이동.gif"
import snsImg7 from "../asset/sns_page이동.gif"
import snsImg8 from "../asset/sns_미디어쿼리.gif"
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

const H2 = styled.span`
  font-size:2rem;
  font-weight:lighter;
`;

const Line = styled.hr`
  margin:2rem 0 2rem 0;
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
        <TitleText>SNS Team Project</TitleText>
        <SkillBox>
          <SkillText>React</SkillText>
          <SkillText>기본 CSS</SkillText>
          <SkillText>Media Query</SkillText>
          <SkillText>Axios</SkillText>
          <SkillText>Redux Toolkit</SkillText>
          <SkillText>Vite</SkillText>
        </SkillBox>
        <InText>
          안녕하세요. 정호동입니다.<br /><br />
          이 작업물은 총인원 5명 프런트엔드 3명 백엔드 1명 DB1명에서 진행한 제 첫 팀 프로젝트입니다. 제가 속한 곳은 프론트엔드입니다.<br /><br />
          제 역할은 MainFeed 전체 작업을 하였고 진행하다 보니 전체 세부 기능 부분 및 & 로그인 Axios 처리 & react-router-dom 등등 다양한 부분도 맡아서 하게 되었고 말한 거 외에도 배워간 것이 많았던 좋은 경험의 팀 프로젝트였습니다.<br /><br />
          아래는 간략하게 제가 담당했던 파트 중 눈에 보이는 부분들로 보기 좋게 정리하였습니다.
          <Line />
        </InText>
        <H2>로그인 후 MainFeed(Home) Page 진입</H2>
        <MovieImg src={snsImg1} alt="ChartImg" />
        <Line />
        <H2>게시물 작성</H2>
        <MovieImg src={snsImg2} alt="ChartImg" />
        <Line />
        <H2>게시물 삭제</H2>
        <MovieImg src={snsImg3} alt="ChartImg" />
        <Line />
        <H2>댓글 작성 & 댓글 삭제</H2>
        <MovieImg src={snsImg4} alt="ChartImg" />
        <Line />
        <H2>좋아요 하기 & 좋아요 취소 & 팔로우 하기 & 팔로우 취소</H2>
        <MovieImg src={snsImg5} alt="ChartImg" />
        <Line />
        <H2>스크롤 시 다음 MainFeed GET & 최상단 이동 버튼</H2>
        <MovieImg src={snsImg6} alt="ChartImg" />
        <Line />
        <H2>SideBar에서 Page이동 ( MainFeed & Profile )</H2>
        <MovieImg src={snsImg7} alt="ChartImg" />
        <H2>Media Query</H2>
        <MovieImg src={snsImg8} alt="ChartImg" />
        {/*  */}
        <GoLink href="https://jeonghodong.tistory.com/entry/%EA%B0%99%EC%9D%B4%EC%9D%98-%EA%B0%80%EC%B9%98-%EC%B2%AB-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" target="_blank" rel="noreferrer" >
          첫 팀 프로젝트 블로그 정리 글</GoLink>
      </Paper>
    </Wrap>
  );
}

export default Section2;
