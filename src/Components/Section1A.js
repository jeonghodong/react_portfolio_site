import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: relative;
  background-color: #101e26;
  height: 100vh;
  z-index: 2;
`;

function Section1A() {
  return (
    <Wrap>
      <h2>section1 about</h2>
      <UpDownButton />
    </Wrap>
  );
}

export default Section1A;
