import styled from "styled-components";
import { SkillData, ContactData } from "../Data/IntroData";
import TitleBox from "./TitleBox";

const Wrap = styled.div`
  background-color: rgb(248 248 248);
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
  background-color: rgb(248 248 248);
  width: 70%;
  padding-top: 130px;
`;
const About = styled.h2`
  position: relative;
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 5rem;
`;
const AboutLine = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  width: 70%;
  height: 5px;
  background-color: black;
  margin-left: 1rem;
  display: inline-block;
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
const H2 = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 3rem;
`;
const SkillName = styled.h2`
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const SkillsUl = styled.ul`
  font-size: 1.3vw;
  font-weight: 300;
  margin-bottom: 10rem;
`;
const SkillsLi = styled.li`
  margin-bottom: 3rem;
`;

function Intro() {
  return (
    <Wrap>
      <Left>
        <TitleBox />
      </Left>
      <Right>
        <About>
          About me<AboutLine> </AboutLine>
        </About>
        <H2>Skills</H2>
        <SkillBox>
          {SkillData.map((v) => (
            <div>
              <SkillName>{v.name}</SkillName>
              <SkillsUl>
                {v.skills.map((v2) => (
                  <SkillsLi key={v2}>{v2}</SkillsLi>
                ))}
              </SkillsUl>
            </div>
          ))}
        </SkillBox>
        <div>
          <H2>Contact & Channel</H2>
          <ContactBox>
            {ContactData.map((v) => (
              <div>
                <Icon>{v.icon}</Icon>
                <span>{v.value}</span>
              </div>
            ))}
          </ContactBox>
        </div>
      </Right>
    </Wrap>
  );
}

export default Intro;
