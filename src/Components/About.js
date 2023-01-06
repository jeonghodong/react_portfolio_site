import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: relative;
  background-color: black;
  height: 100vh;
  color: white;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title1 = styled.span`
  display: block;
  font-size: 1.5vw;
`;
const Title2 = styled.span`
  display: block;
  padding-top: 1rem;
  font-size: 1.5vw;
`;

function About() {
  return (
    <Wrap>
      <TitleBox>
        <Title1>ipsum dolor sit, amet consectetur</Title1>
        <br />
        <Title2>adipisicing elit. Debitis</Title2>
      </TitleBox>
      <UpDownButton />
    </Wrap>
  );
}

export default About;
