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
  padding: 12rem 0 8rem 0;
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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "bar",
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(154, 162, 235)",
          "rgb(254, 162, 235)",
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
      label: 'My First Dataset',
      data: [80, 20],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(250, 250, 250)',
      ],
      hoverOffset: 4
    }]
  };
  const doughnutHtmlData = {
    labels: [
      'CSS',
      '미래에 채워질 실력',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [80, 20],
      backgroundColor: [
        'rgb(155, 99, 132)',
        'rgb(250, 250, 250)',
      ],
      hoverOffset: 4
    }]
  };
  const doughnutJsData = {
    labels: [
      'CSS',
      '미래에 채워질 실력',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [80, 20],
      backgroundColor: [
        'rgb(255, 99, 32)',
        'rgb(250, 250, 250)',
      ],
      hoverOffset: 4
    }]
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={skill}>
        <TitleText>Skills</TitleText>
        <hr />
        <h2>Chart</h2>
        <div className="chart">
          <Doughnut type="doughnut" data={doughnutCssData} width="400px" height="400px" options={{ responsive: false, }} className="chart_doughnut" />
          <Doughnut type="doughnut" data={doughnutHtmlData} width="400px" height="400px" options={{ responsive: false, }} className="chart_doughnut" />
          <Doughnut type="doughnut" data={doughnutJsData} width="400px" height="400px" options={{ responsive: false, }} className="chart_doughnut" />
        </div>
        <Bar type="bar" data={BarData} style={{ margin: "0 auto" }} width="800px" height="500px" options={{ responsive: false, }} />
      </Wrap>
    </ThemeProvider>
  );
});

export default SkillBox;
