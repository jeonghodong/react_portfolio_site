import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: relative;
  background-color: black;
  height: 100vh;
  color: white;
`;

function About() {
  return (
    <Wrap>
      <h2>about</h2>
      <UpDownButton />
    </Wrap>
  );
}

export default About;
