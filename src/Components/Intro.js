import styled from "styled-components";
import { SkillData, ContactData } from "../Data/IntroData";
import TitleBox from "./TitleBox";

const Wrap = styled.div`
  background-color: rgb(250 250 250);
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
  box-shadow: 15px 25px 18px -2px rgba(0, 0, 0, 0.44);
  z-index: 1;
`;
// right
const Right = styled.div`
  background-color: rgb(250 250 250);
  width: 70%;
  padding-top: 200px;
`;
const Skills = styled.h2`
  position: relative;
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 5rem;
  color: #0000c5;
`;

const SkillsLine = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  width: 80%;
  height: 2.5px;
  background-color: gray;
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
  padding-top: 3rem;
  & ul {
    list-style: inside;
  }
`;
const SkillName = styled.h2`
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 5rem;
`;
const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  // background: rgb(245 245 245);
  // padding: 3rem;
  // border-radius: 2rem;
  // box-shadow: inset 4px 4px 15px 0px #000000;
`;
const SkillsUl = styled.ul`
  font-size: 1vw;
  margin-bottom: 20rem;
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
        <Skills>
          Skills <SkillsLine> </SkillsLine>
        </Skills>
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
