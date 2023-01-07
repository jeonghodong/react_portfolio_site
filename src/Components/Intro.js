import styled from "styled-components";
import { SkillData, ContactData } from "../Data/IntroData";
import TitleBox from "./TitleBox";

const Wrap = styled.div`
  background-color: rgb(214, 214, 214);
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;
// left
const Left = styled.div`
  width: 25%;
  margin: 5vw 5vw 0 0;
  background-color: rgb(255, 255, 255);
  padding-top: 5rem;
  border-radius: 0 10vw 0 0;
  box-shadow: 21px 25px 18px -2px rgba(0, 0, 0, 0.44);
  z-index: 1;
`;

// right
const Right = styled.div`
  background-color: rgb(214, 214, 214);
  width: 70%;
  padding-top: 10rem;
`;
const About = styled.h2`
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 5rem;
`;
const Skills = styled.h2`
  font-size: 2vw;
  font-weight: bold;
`;
const Icon = styled.span`
  display: inline-block;
  font-size: 1.2vw;
  margin: 0.8rem 1.5rem 0 0;
`;
const SkillBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  & ul {
    list-style: inside;
  }
`;
const SkillName = styled.h2`
  font-size: 1vw;
  font-weight: bold;
`;
const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

function Intro() {
  return (
    <Wrap>
      <Left>
        <TitleBox />
      </Left>
      <Right>
        <About>About me</About>
        <Skills>Skills</Skills>
        <SkillBox>
          {SkillData.map((v) => (
            <div>
              <SkillName>{v.name}</SkillName>
              <ul>
                {v.skills.map((v2) => (
                  <li key={v2}>{v2}</li>
                ))}
              </ul>
            </div>
          ))}
        </SkillBox>
        <Skills>Contact & Channel</Skills>
        <ContactBox>
          {ContactData.map((v) => (
            <div>
              <Icon>{v.icon}</Icon>
              <span>{v.value}</span>
            </div>
          ))}
        </ContactBox>
      </Right>
    </Wrap>
  );
}

export default Intro;
