import styled from "styled-components";

import ContactBox from "./ContactBox";
import SkillBox from "./SkillBox";
import TitleBox from "./TitleBox";

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
  return (
    <Wrap>
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
