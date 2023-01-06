import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: relative;
  background-color: black;
  height: 100vh;
  color: white;
  z-index: 2;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.span`
  display: block;
  font-size: 1.8vw;
  font-weight: bold;
`;

function About() {
  return (
    <Wrap>
      <TitleBox>
        <Title>ipsum dolor sit, amet consectetur</Title>
        <br />
        <Title>정호동입니다.</Title>
      </TitleBox>
      <UpDownButton />
    </Wrap>
  );
}

export default About;
