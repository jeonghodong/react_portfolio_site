import styled from "styled-components";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: relative;
  background-color: rgb(209, 209, 209);
  height: 100vh;
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
