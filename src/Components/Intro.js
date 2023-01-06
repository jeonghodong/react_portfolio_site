import styled from "styled-components";

const Wrap = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;
// left
const Left = styled.div`
  width: 30%;
  padding-top: 10rem;
  border-radius: 0 15vw 0 0;
  box-shadow: 23px 30px 16px -3px rgba(0, 0, 0, 0.44);

  z-index: 1;
`;
const TitleBox = styled.h2`
  font-size: 1vw;
`;
const Cover = styled.p`
  padding: 20px 0 10px 0;
`;
const Name = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;
const Account = styled.p`
  background-color: gray;
  text-align: center;
  font-width: 100px;
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
  width: 70%;
  background-color: lightgray;
  padding-top: 10rem;
`;
const About = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  color: navy;
`;
function Intro() {
  return (
    <Wrap>
      <Left>
        <Circle> </Circle>
        <TitleBox>
          <Cover>Loremseqffsafsaffsafsa</Cover>
          <Name>jeonghdong</Name>
          <Line> </Line>
          <Account> </Account>
        </TitleBox>
      </Left>
      <Right>
        <About>About me</About>
      </Right>
    </Wrap>
  );
}

export default Intro;
