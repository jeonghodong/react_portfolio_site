import styled from "styled-components";
import { useEffect, useRef } from "react";
import ContactBox from "./ContactBox";
import SkillBox from "./SkillBox";
import TitleBox from "./TitleBox";
import openBg from "../Functions/openBg";

const Wrap = styled.div`
  background-color: rgb(250 250 250);
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  padding-top: 6rem;
`;
const Left = styled.div`
  width: 22.5%;
  margin-right: 5%;
`;
const Right = styled.div`
  background-color: rgb(250 250 250);
  width: 72.5%;
`;

function Intro() {
  const bg = useRef();
  useEffect(() => {
    openBg(bg);
  }, []);
  return (
    <Wrap ref={bg}>
      <Left>
        <TitleBox />
      </Left>
      <Right>
        <SkillBox />
        <ContactBox />
      </Right>
    </Wrap>
  );
}

export default Intro;
