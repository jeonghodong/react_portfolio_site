import styled from "styled-components";
import { useEffect, useRef } from "react";
import ContactBox from "./ContactBox";
import SkillBox from "./SkillBox";
import TitleBox from "./TitleBox";
import openBg from "../Functions/openBg";
import PortfolioBox from "./PortfolioBox";

const Wrap = styled.div`
  padding-top: 6rem;
  height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;

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
      <PortfolioBox />
      <ContactBox />
    </Wrap>
  );
}

export default Intro;
