import { forwardRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SkillData } from "../Data/IntroData";
import theme from "../styles/theme";

const SkillName = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
`;

const SkillsUl = styled.ul`
  font-size: 1vw;
  text-align: center;
`;
const SkillsLi = styled.li`
  margin-bottom: 4rem;
`;
const TitleText = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  color: #0000c5;
  padding: 12rem 0 8rem 0;
  text-align: center;
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap:30px
  justify-items: center;
`;

const Wrap = styled.div`
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    ${TitleText} {
      font-size: 22px;
    }
    ${SkillName} {
      font-size: 18px;
    }
    ${SkillsLi} {
      font-size: 14px;
    }
  }
  font-family: "Poppins", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillBox = forwardRef((_, skill) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
});

export default SkillBox;
