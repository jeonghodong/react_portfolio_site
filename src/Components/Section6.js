import { useLayoutEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../styles/theme";
import openBg from "../Functions/openBg";
import Marvel1 from "../asset/marvel1.png"
import Marvel2 from "../asset/marvel2.png"
import Marvel3 from "../asset/marvel3.png"


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
  font-size:4.5rem;
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
  font-size:1vw;
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
    color:#ff0000bd !important ;
    font-size:1vw;
`;
const Wrap = styled.div`
    background-color: #ff0000bd;
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
function Section6() {
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
          <TitleText>Marvel Hero Test</TitleText>
          <SkillBox>
            <SkillText>React</SkillText>
            <SkillText>Recoil</SkillText>
            <SkillText>Tailwind CSS</SkillText>
            <SkillText>Axios</SkillText>
            <SkillText>Vite</SkillText>
          </SkillBox>
          <MovieImg src={Marvel1} alt="MarvelImg" />
          <InText>
            안녕하세요. 정호동입니다.<br /><br />
            자신의 평소 성격을 테스트하여 성향에 맞는 특정 히어로가 나오는 성격 테스트입니다.<br /><br />
          </InText>
          <MovieImg src={Marvel2} alt="MarvelImg" />
          <InText>
            질문은 총 20개이며 MBTI 기반의 결과를 참고합니다.<br /><br />
            제가 생각해낸 로직은 5개씩 나누어 숫자가 높은 쪽이 E or I, S or N, F or T, P or J를 결정하여 결과를 만듭니다.
            <br /><br />
          </InText>
          <MovieImg src={Marvel3} alt="MarvelImg" />
          <InText>
            결과에 맞는 MBTI 성향인 마블 캐릭터가 나옵니다.
          </InText>
          <LinkArrow />
          <GoLink href="https://jeonghodong.github.io/marvel_test/" target="_blank" rel="noreferrer" >
            https://jeonghodong.github.io/marvel_test/
          </GoLink>
        </Paper>
      </Wrap >
    </ThemeProvider  >
  );
}

export default Section6;
