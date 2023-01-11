import styled from "styled-components";
import { useEffect, useRef } from "react";
import ContactBox from "./ContactBox";
import SkillBox from "./SkillBox";
import TitleBox from "./TitleBox";
import openBg from "../Functions/openBg";

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  padding-top: 6rem;

  // 기능은 동작하지만 scroll bar 안보이게하기.
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Intro() {
  const bg = useRef();
  useEffect(() => {
    openBg(bg);
  }, []);
  return (
    <Wrap ref={bg}>
      <TitleBox />
      <SkillBox />
      <ContactBox />
    </Wrap>
  );
}

export default Intro;
