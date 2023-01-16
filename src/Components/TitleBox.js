import { forwardRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const Account = styled.span`
  text-align: left;
  word-break: break-all;
  width: 100%;
  font-size: 1.1vw;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 23px;
`;

const Line = styled.div`
  background-color: gray;
  width: 100%;
  height: 4px;
  margin: 47px 0 47px 0;
  border-radius: 20px;
`;
const Wrap = styled.div`
  @media ${(props) => props.theme.desktop} {
    align-items: center;
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
      width: 50%;
    }
  }
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top 7rem;
  max-width: 1200px;
  margin: 0 auto;
  
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

const TitleBox = forwardRef((_, title) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={title}>
        <Circle>
          <ProfilImg src="img/ghost2.jpg" alt="profil_img" />
        </Circle>
        <Cover>항상 빛나는 다이아몬드 같은 디자이너</Cover>
        <Name>정호동</Name>
        <Line> </Line>
        <Account>
          안녕하세요.
          <br />
          <br />
          <br />
          니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
          <br />
          <br />
          단순하고 진부한 디자인이 아닌 개성있 는 기업의 매출을 극대화하는 디자인
          <br />
          <br />한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
          <br />
          <br />
          <br />
          니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
          <br />
          <br />
          단순하고 진부한 디자인이 아닌 개성있 는 기업의 매출을 극대화하는 디자인
          <br />
          <br />한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
          <br />
          <br />
          <br />
          니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
          <br />
          <br />
          단순하고 진부한 디자인이 아닌 개성있 는 기업의 매출을 극대화하는 디자인
          <br />
          <br />한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
          <br />
          <br />
          <br />
          니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
          <br />
          <br />
          단순하고 진부한 디자인이 아닌 개성있 는 기업의 매출을 극대화하는 디자인
          <br />
          <br />한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
        </Account>
      </Wrap>
    </ThemeProvider>
  );
});

export default TitleBox;
