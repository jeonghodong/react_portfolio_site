import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: relative;
  background-color: #5a58d7;
  height: 100vh;
`;

function Section1A() {
  return (
    <Wrap>
      <h2>Section2 about</h2>
      <UpDownButton />
    </Wrap>
  );
}

export default Section1A;
