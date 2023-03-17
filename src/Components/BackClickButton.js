import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import styled, { keyframes, ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
}`;
const rotate2 = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
        // font-size: 3.5vw;
}`;

const BackButton = styled.i`
  /* @media ${(props) => props.theme.desktop} {
    &{
  z-index:1000;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2.3vw;
  margin: 2rem 3rem 0rem 0rem;
  color:black;
  opacity:100%;
  cursor: pointer;
  }
  } */
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2.3vw;
  margin: 2rem 2rem 0rem 0rem;
  opacity:40%;
  color:black;
  cursor: pointer;
  animation: ${rotate} 3s ease-in-out infinite;
  &:hover {
    transition: 0.5s;
    font-size: 3.5vw;
    right: -10px;
    opacity:100%;
    animation: ${rotate2} 0.5s ease;
    animation-fill-mode: forwards;
    
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
    font-size: 2.3vw;
  }
`;

function BackClickButton({ onClick }) {
  const button = useRef();
  useEffect(() => {
    button.current.animate(
      [
        // keyframes
        { opacity: "0" },
        { opacity: "0.4" },
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1,
      }
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BackButton ref={button} onClick={onClick} className="fa-solid fa-xmark">
        {" "}
      </BackButton>
    </ThemeProvider>
  );
}

BackClickButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackClickButton;
