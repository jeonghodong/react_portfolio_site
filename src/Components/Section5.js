import { useLayoutEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../styles/theme";
import openBg from "../Functions/openBg";
import Mall1 from "../asset/Mall1.png"
import Mall2 from "../asset/Mall2.png"
import Mall3 from "../asset/Mall3.png"
import Mall4 from "../asset/Mall4.png"
import Mall5 from "../asset/Mall5.png"
import Mall6 from "../asset/Mall6.png"

import BackClickButton from "./BackClickButton";
import closeBg from "../Functions/closeBg";
import LinkArrow from "./LinkArrow";


const Paper = styled.div`
    background-color:white;
    width: 100vh;
    max-width: 100%;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
    margin: 2rem auto;
    position:relative;
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
  font-size:.9vw;
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
    color:black !important ;
    font-size:1vw;
`;
const Wrap = styled.div`
    background-color: #ececec;
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
function Section5() {
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
      <Wrap Wrap ref={WrapBg} >
        <Paper ref={bg}>
          <BackClickButton onClick={onClick} />
          <TitleText>Cat Shopping Mall</TitleText>
          <SkillBox>
            <SkillText>React</SkillText>
            <SkillText>Redux Toolkit</SkillText>
            <SkillText>Sass(Scss)</SkillText>
            <SkillText>Styled Components</SkillText>
            <SkillText>Axios</SkillText>
            <SkillText>Firebase</SkillText>
            <SkillText>Vite</SkillText>
          </SkillBox>
          <MovieImg src={Mall1} alt="ChartImg" />
          <InText>
            안녕하세요. 정호동입니다.<br /><br />
            고양이를 키우며 고양이 용품을 판매하는 쇼핑몰 1개를 만들어보고 싶었습니다.<br /><br />
            직접 서버와 데이터베이스를 공부하여 다루어서 배포까지 하고 싶었으나,<br /><br />시간의 문제로 로그인, 회원가입, DB(firestore), 호스팅 기능을 firebase를 사용하여 완성하였습니다.</InText>
          <MovieImg src={Mall2} alt="ChartImg" />
          <InText>
            현 프로젝트를 진행하며 데이터들을 이전보다 더 능숙하게 핸들링 할 수 있게 되었고 기능 개발 부분에서도 실력이 향상되었음을 느꼈습니다.<br /><br />
            아쉬운 점은 이전 팀 프로젝트와 달리 서버와 DB가 없었기에 REST API 통신을 써보지 못한 점입니다.
          </InText>
          <MovieImg src={Mall3} alt="ChartImg" />
          <InText>

            해당 프로젝트는 로그인 시 Redux Toolkit으로 세션 스토리지에 유저정보를 저장하며.<br /><br />로컬 스토리지, 세션 스토리지에 대해 이해가 되었습니다.
          </InText>
          <MovieImg src={Mall4} alt="ChartImg" />
          <InText>
            아쉬운 점은 구매하기 버튼을 통해 사용자에게 결제 서비스까지 제공해 보는 경험을 하였다면 어땠을까 싶습니다.<br /><br />

          </InText>
          <MovieImg src={Mall5} alt="ChartImg" />
          <InText>
            쇼핑몰 안에 게시글 기능을 통해 커뮤니티적인 부분을 추가해 보았습니다.<br /><br />
            장바구니, 게시글, 유저정보의 데이터들은 firestore에 저장됩니다.
          </InText>
          <MovieImg src={Mall6} alt="ChartImg" />
          <InText>
            이 프로젝트를 진행하며 이전 작업물 및 팀 프로젝트에서 배웠던 것과 부족했던 것들을 어느 정도 채울 수 있는 계기가 되었습니다.<br /><br />
            무엇보다 프론트엔드 지식으로 최소 혼자 서비스를 배포할 수 있는 기회가 있다는 것에 큰 흥미를 느끼게 되었고,<br /><br />
            직접 서버와 데이터베이스를 학습하며 더욱 탄탄한 서비스를 제공할 수 있는 능력을 갖추고 싶어졌습니다.
          </InText>
          <LinkArrow />
          <GoLink href="https://malllogin-3905e.web.app" target="_blank" rel="noreferrer" >
            https://malllogin-3905e.web.app
          </GoLink>
        </Paper>
      </Wrap >
    </ThemeProvider  >
  );
}

export default Section5;
