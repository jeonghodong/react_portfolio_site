import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import openBg from "../Functions/openBg";
import UpDownButton from "./UpDownButton";
import theme from "../styles/theme";

const TitleName = styled.h1`
  color: white;
  font-size: 5vw;
  font-weight: bold;
  text-align: right;
  position: relative;
  top: 35%;
  margin-right: 10rem;
`;

const Wrap = styled.div`
  @media ${(props) => props.theme.tablet} {
    ${TitleName} {
      text-align: center;
      margin-right: 0;
    }
  }
  @media ${(props) => props.theme.mobile} {
    ${TitleName} {
      text-align: center;
      margin-right: 0;
      font-size: 30px;
    }
  }
  font-family: "Poppins", sans-serif;
  position: relative;
  background-color: #0000c5;
  height: 100vh;
  z-index: 2;
`;

function Section3A() {
  const navigate = useNavigate();
  const bg = useRef();
  useLayoutEffect(() => {
    openBg(bg);
  }, []);

  const onClick = () => {
    bg.current.animate(
      [
        { transform: "translateY(0px)", opacity: "1" },
        { transform: "translateY(-1200px)", opacity: "0" },
      ],
      {
        delay: 0,
        duration: 1100,
        easing: "ease",
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(() => {
      navigate("/Portfolio");
    }, 900);
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={bg}>
        <TitleName>This Portfolio</TitleName>
        <UpDownButton onClick={onClick} />
      </Wrap>
    </ThemeProvider>
  );
}

export default Section3A;
