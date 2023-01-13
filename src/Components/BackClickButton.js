import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2.3vw;
  margin: 2rem 5rem 0rem 0rem;
  cursor: pointer;
  animation: ${rotate} 3s ease-in-out infinite;
  &:hover {
    transition: 0.5s;
    font-size: 3.5vw;
    animation: ${rotate2} 0.5s ease;
    animation-fill-mode: forwards;
  }
  &:not(:hover) {
    transition: 0.5s ease-out;
    font-size: 2.3vw;
  }
`;

function BackClickButton() {
  const button = useRef();
  const back = useNavigate();
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

  const onClick = () => {
    back("/About#port");
  };

  return (
    <BackButton ref={button} onClick={onClick} className="fa-solid fa-xmark">
      {" "}
    </BackButton>
  );
}

export default BackClickButton;
