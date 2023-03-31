// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { forwardRef } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "../styles/chart.scss"

const SkillName = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
`;


const SkillsLi = styled.li`
  margin-bottom: 4rem;
`;
const TitleText = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  color: #0000c5;
  padding: 10rem 0 8rem 0;
  text-align: center;
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

  // BarData
  const BarData = {
    labels: ["React", "Redux", "Styled Component", "Sass(Scss)", "CSS module", "Media Query", "Postman", "Firebase", "Git"],
    datasets: [
      {
        type: "bar",
        label: "Skill",
        data: [82, 40, 80, 70, 80, 65, 75, 45, 60, 100],
        backgroundColor: [
          "#F23558",
          "#723FA6",
          "#0487D9",
          "#03A65A",
          "#F25835",
          "rgb(154, 162, 235)",
          "rgb(54, 102, 235)",
          "rgb(254, 152, 235)",
          "rgb(114, 252, 135)",
        ],
      },
    ],
  };

  // doughnutChart
  const doughnutCssData = {
    labels: [
      'CSS',
      '미래에 채워질 실력',
    ],
    datasets: [{
      label: 'Skill',
      data: [80, 20],
      backgroundColor: [
        '#4284f3',
        '#f2f2f2',
      ],
      hoverOffset: 4
    }]
  };
  const doughnutHtmlData = {
    labels: [
      'HTML',
      '미래에 채워질 실력',
    ],
    datasets: [{
      label: 'Skill',
      data: [85, 15],
      backgroundColor: [
        '#ea4335',
        '#f2f2f2',
      ],
      hoverOffset: 4
    }]
  };
  const doughnutJsData = {
    labels: [
      'Javascript',
      '미래에 채워질 실력',
    ],
    datasets: [{
      label: 'Skill',
      data: [60, 40],
      backgroundColor: [
        '#fabc05',
        '#f2f2f2',
      ],
      hoverOffset: 4
    }]
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={skill}>
        <TitleText>Skills</TitleText>

        <div className="chart">
          <div className="chart_box">
            <span className="chart_box_text">CSS</span>
            <Doughnut type="doughnut" data={doughnutCssData} width="350px" height="350px" options={{ responsive: false, }} className="chart_box_doughnut" />
          </div>
          <div className="chart_box">
            <span className="chart_box_text">HTML</span>
            <Doughnut type="doughnut" data={doughnutHtmlData} width="350px" height="350px" options={{ responsive: false, }} className="chart_box_doughnut" />
          </div>
          <div className="chart_box">
            <span className="chart_box_text">Javascript</span>
            <Doughnut type="doughnut" data={doughnutJsData} width="350px" height="350px" options={{ responsive: false, }} className="chart_box_doughnut" />
          </div>
        </div>
        <Bar type="bar" data={BarData} style={{ margin: "0 auto" }} width="1000px" height="400px" options={{ responsive: false, }} className="chart_bar" />
      </Wrap>
    </ThemeProvider>
  );
});

export default SkillBox;
