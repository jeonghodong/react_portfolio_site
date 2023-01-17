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
    & ${TitleName} {
      text-align: center;
      margin-right: 0;
    }
  }
  font-family: "Poppins", sans-serif;
  position: relative;
  background-color: #101e26;
  height: 100vh;
  z-index: 2;
`;

function Section1A() {
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
      navigate("/Movie");
    }, 900);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={bg}>
        <TitleName>REACT MOVIE APP</TitleName>
        <UpDownButton onClick={onClick} />
      </Wrap>
    </ThemeProvider>
  );
}

export default Section1A;
