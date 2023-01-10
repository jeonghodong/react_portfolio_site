import styled from "styled-components";
import { SkillData } from "../Data/IntroData";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 10rem;
  & ul {
    list-style: inside;
  }
  font-family: "Poppins", sans-serif;
`;

const SkillName = styled.h2`
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 5rem;
`;

const SkillsUl = styled.ul`
  font-size: 1vw;
`;
const SkillsLi = styled.li`
  margin-bottom: 3rem;
`;
const Skills = styled.h2`
  position: relative;
  font-size: 2.5vw;
  font-weight: bold;
  color: #0000c5;
  padding: 5rem 0 5rem 0;
`;

const SkillsLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
  height: 2.5px;
  background-color: gray;
  margin-left: 1rem;
  display: inline-block;
`;
function SkillBox() {
  return (
    <div>
      <div>
        <Skills>
          Skills <SkillsLine> </SkillsLine>
        </Skills>
      </div>
      <Wrap>
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
      </Wrap>
    </div>
  );
}

export default SkillBox;
