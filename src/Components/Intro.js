import styled from "styled-components";

const Wrap = styled.div`
  background-color: rgb(214, 214, 214);
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

// left
const Left = styled.div`
  width: 25%;
  margin: 5vw 5vw 0 0;
  background-color: rgb(255, 255, 255);
  padding-top: 5rem;
  border-radius: 0 10vw 0 0;
  box-shadow: 21px 25px 18px -2px rgba(0, 0, 0, 0.44);
  z-index: 1;
`;
const TitleBox = styled.h2`
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cover = styled.p`
  padding: 20px 0 10px 0;
`;
const Name = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;
const Account = styled.span`
  text-align: center;
  word-break: break-all;
  width: 60%;
  font-weight: 300;
`;
const Circle = styled.div`
  background-color: gray;
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
`;
const Line = styled.div`
  background-color: black;
  width: 100px;
  height: 8px;
  margin: 40px 0 40px 0;
`;
// right
const Right = styled.div`
  background-color: rgb(214, 214, 214);
  width: 70%;
  padding-top: 10rem;
`;
const About = styled.h2`
  font-size: 2vw;
  font-weight: bold;
`;

function Intro() {
  return (
    <Wrap>
      <Left>
        <TitleBox>
          <Circle> </Circle>
          <Cover>상세 내 설명</Cover>
          <Name>jeonghdong</Name>
          <Line> </Line>
          <Account>
            니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
            <br />
            <br />
            단순하고 진부한 디자인이 아닌 개성있 는 기업의 매출을 극대화하는 디자인
            <br />
            <br />한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
          </Account>
        </TitleBox>
      </Left>
      <Right>
        <About>About me</About>
      </Right>
    </Wrap>
  );
}

export default Intro;
