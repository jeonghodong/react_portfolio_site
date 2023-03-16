/* eslint-disable react/no-unescaped-entities */
import { forwardRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import profileImg from "../asset/ghost2.jpg"

const Account = styled.span`
  text-align: left;
  word-break: break-all;
  width: 100%;
  font-size: 16px;
  font-weight:300;
  letter-spacing: 1px;
`;

const Line = styled.div`
  background-color: gray;
  width: 100%;
  height: 4px;
  margin: 47px 0 47px 0;
  border-radius: 20px;
`;

const Cover = styled.p`
  padding: 50px 0 20px 0;
  font-size: 1vw;
  font-weight: 400;
`;
const Name = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;

const Circle = styled.div`
  background-color: gray;
  width: 16vw;
  height: 16vw;
  border-radius: 10%;
`;
const ProfilImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  border: 3px solid #022340;
`;

const Wrap = styled.div`
  @media ${(props) => props.theme.desktop} {
      align-items: center;
      padding-top:2rem;
    ${Account}{
      text-align:center;
    }
    ${Line}{
      width: 80%
    }
  }
    @media ${(props) => props.theme.mobile} {
    ${Account}{
      text-align:center;
      width: 80%;
      font-size:13px;
    }
    ${Circle}{
      width: 120px;
      height: 120px; 
    }
    ${Name}{
      font-size:18px;
    }
    ${Cover}{
      font-size:12px;
    }
  }
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 1rem;
  max-width: 900px;
  margin: 0 auto;
  
`;

const TitleBox = forwardRef((_, title) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={title}>
        <Circle>
          <ProfilImg src={profileImg} alt="profil_img" />
        </Circle>
        <Cover>날이면 날마다 성장해나가는 개발자</Cover>
        <Name>정호동</Name>
        <Line> </Line>
        <Account>
          '발판을 만들어라'
          <br />
          <br />
          <br />
          어떠한 문제에 부딪히는 일은 누구나 달갑지 않은 일입니다.
          <br />
          <br />
          <br />
          허나 그 문제를 1개 해결하게 되면 그 1개의 문제는 제가 올라갈 수 있는 1개의 발판이 됩니다.
          <br />
          <br />
          <br />
          그 문제들을 꾸준히 해결해 나간다면 여러 개의 발판이 되고 그렇게 올라가며 저는 성장한다고 생각합니다.
          <br />
          <br />
          <br />
          모르는 것들, 새로운 것들을 꾸준히 배워나가며 성장해나가고 저의 가치를 증명해 내려고 합니다.
          <br />
          <br />
          <br />
          단순한 코딩만 하는 것이 아닌 그것을 뛰어넘어 더욱 큰 그림을 볼 줄 아는 개발자가 되는 것이 목표입니다.
          <br />
          <br />
          <br />
        </Account>
      </Wrap>
    </ThemeProvider>
  );
});

export default TitleBox;
