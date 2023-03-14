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
  @media ${(props) => props.theme.mobile} {
      display:none;
  }
  @media ${(props) => props.theme.tablet} {
      display:none;
  }
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2.3vw;
  margin: 2rem 3rem 0rem 0rem;
  color:white;
  opacity:50%;
  cursor: pointer;
  animation: ${rotate} 3s ease-in-out infinite;
  &:hover {
    transition: 0.5s;
    font-size: 3.5vw;
    right: -10px;
    animation: ${rotate2} 0.5s ease;
    animation-fill-mode: forwards;
    opacity:100%;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
    font-size: 2.3vw;
  }
`;

function BackClickButton({ onClick }) {
  const button = useRef();
  // const back = useNavigate();
  useEffect(() => {
    button.current.animate(
      [
        // keyframes
        { opacity: "0" },
        { opacity: "1" },
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1,
      }
    );
  }, []);

  // const onClick = () => {
  //   back("/About#port");
  // };

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
