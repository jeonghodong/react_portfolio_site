import { forwardRef } from "react";
import styled from "styled-components";
import { SkillData } from "../Data/IntroData";

const Wrap = styled.div`
  height: 100vh;

  font-family: "Poppins", sans-serif;
`;

const SkillName = styled.h2`
  font-size: 1.5vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
`;

const SkillsUl = styled.ul`
  font-size: 1vw;
  text-align: center;
`;
const SkillsLi = styled.li`
  margin-bottom: 3rem;
`;
const TitleText = styled.h2`
  font-size: 2.5vw;
  font-weight: bold;
  color: #0000c5;
  padding: 5rem 0 5rem 0;
  text-align: center;
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const SkillBox = forwardRef((_, skill) => {
  return (
    <Wrap ref={skill}>
      <TitleText>Skills</TitleText>
      <SkillList>
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
      </SkillList>
    </Wrap>
  );
});

export default SkillBox;
